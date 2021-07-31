import React from 'react'
import './PostItemCard.css'

class PostItemCard extends React.Component {
    render(){
        return (

            <div className="card-item-block">

                <p className="card-item-username">
                    {this.props.name}
                </p>

                <div className="card-item-main">
                    <img className="card-item-image" src={this.props.url} alt="" />
                    <div>
                        <p className="body-text">
                            {this.props.text}
                        </p>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default PostItemCard
