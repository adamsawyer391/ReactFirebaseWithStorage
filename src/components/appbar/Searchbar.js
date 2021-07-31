import React from 'react'
import './Searchbar.css';

const url = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png";

class Searchbar extends React.Component {

    handleInput(){
        console.log('Clicked');
    }
    
    render(){
        return (
            <div className="appbar-search-field" >
                <input placeholder="Search..." className="topbar-search-input" />
                <img className="topbar-search-input-image-button" src={url} onClick={ () => this.handleInput()} alt="" />
            </div>
        )
    }

}

export default Searchbar
