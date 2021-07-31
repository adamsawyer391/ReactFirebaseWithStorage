import React from 'react'
import './TabItemPost.css'

class TabItemPost extends React.Component {
    render(){
        return (
            <div className="tab-item-post-area">
                <p className="tab-text-display">
                    {this.props.tabtext} 
                </p>
                 
            </div>
        )
    }
    
}

export default TabItemPost
