import React, { useState, useEffect } from 'react'
import './PostArea.css'
import TabItemPost from './posttab/TabItemPost'
// import db from '../firebase/config'
import firebaseApp from '../firebase/config'
import PostItemCard from '../postdisplay/PostItemCard';
import firebase from 'firebase'

const url ="https://murals-weblinc.netdna-ssl.com/product_images/american-flag-waving-in-the-wind-detail-11004304/5ecaa54b1330df0364b572ab/product_large_image.jpg?c=1590338891";
// var post_url = "https://www.lpi.usra.edu/publications/slidesets/3dsolarsystem/images/SS3d18.jpg";

function PostArea () {

    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('');
    const [image, setImage] = useState(null);

    const db = firebaseApp.firestore();
    const storage = firebaseApp.storage();

    const handleChange = e => {
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state changed",
            snapshot => {},
            error => {
                console.log(error);
            },
            () => {
                storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then(uploadURL => {
                    console.log(uploadURL);
                    addPost(uploadURL);
                })
            }
        );
    };

    console.log("image: ", image);

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            console.log(snapshot.docs.map(doc => doc.data()));
            setPosts(snapshot.docs.map(doc => doc.data()))
        })
    }, [] );


    const addPost = (uploadURL) => {
        // event.preventDefault();
        db.collection('posts').add({
            username: 'Adam Sawyer',
            email: 'my@email.com',
            post_url: uploadURL,
            post_text: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then((docRef) => {
            db.collection('posts').doc(docRef.id).update({
                post_key: docRef.id
            })
        });
        setInput('');
    }

    return (
        <div>

            <div className="post-area-main">
                <div className="post-area-top-tabs">
                    <TabItemPost tabtext="Compose Post" />
                    <TabItemPost tabtext="Live Video" />
                </div>
                <div className="post-block">

                    <div className="post-area-writing-area">
                        <img className="post-area-image" src={url} alt="" />
                        <textarea type="text" placeholder="Say something here..." className="post-area-writing-area-input" value={input} 
                            onChange={event => setInput(event.target.value)} />
                    </div>
                    
                    <img className="placeholder-image" src="https://lanecdr.org/wp-content/uploads/2019/08/placeholder.png" alt="" />

                </div>
                
                <input type="file" onChange={handleChange} />
                <button onClick={handleUpload}>POST</button>
            </div>

            
             <div className="post-area-display">
                {posts.map(post => (
                    <PostItemCard name={post.username} text={post.post_text} url={post.post_url}  />
                ))}
             </div>

        </div>
        
    )
    
}

export default PostArea















// import React, { useState, useEffect } from 'react'
// import './PostArea.css'
// import TabItemPost from './posttab/TabItemPost'
// import db from '../firebase/config'
// import PostItemCard from '../postdisplay/PostItemCard';

// const url ="https://murals-weblinc.netdna-ssl.com/product_images/american-flag-waving-in-the-wind-detail-11004304/5ecaa54b1330df0364b572ab/product_large_image.jpg?c=1590338891";

// function PostArea () {

//     const [posts, setPosts] = useState([]);
//     const [input, setInput] = useState('');

//     useEffect(() => {
//         db.ref('posts').on(snapshot => {
//             setPosts(snapshot.value.map(post => post.data()))
//         })
//     }, []);

//     // useEffect(() => {
//     //     db.ref('posts').on('value', function (snapshot) {
//     //         snapshot.forEach(function(childSnapshot) {
//     //             var key = childSnapshot.key;
//     //             var data = childSnapshot.val();
//     //             console.log(data);
//     //             posts.push({ key: key, email: data.email, post_key: data.post_key, post_text: data.post_text, post_url: data.post_url, username: data.username });
//     //         })
//     //         setPosts(posts);
//     //         // console.log(posts);
//     //     })
//     // }, []);

//     const addPost = (event) => {
//         var key = db.ref().push().key;
//         console.log(key);
//         db.ref('posts').child(key).set({
//             username: 'Adam Sawyer',
//             email: 'my@email.com',
//             post_url: '',
//             post_text: input,
//             post_key: key
//         });
//         setInput('');
//     }

//     return (
//         <div>

            
//             <div className="post-area-main">
//                 <div className="post-area-top-tabs">
//                     <TabItemPost tabtext="Compose Post" />
//                     <TabItemPost tabtext="Live Video" />
//                 </div>
//                 <div className="post-area-writing-area">
//                     <img className="post-area-image" src={url} alt="" />
//                     <textarea type="text" placeholder="Say something here..." className="post-area-writing-area-input" value={input} 
//                         onChange={event => setInput(event.target.value)} />
//                 </div>
//                 <button onClick={addPost} type="submit" >SHARE</button>
//             </div>

            
//              <div>
//                 {posts.map(post => (
//                     <PostItemCard name={post.username} text={post.post_text} />
//                 ))}
//              </div>

//         </div>
        
//     )
    
// }

// export default PostArea
