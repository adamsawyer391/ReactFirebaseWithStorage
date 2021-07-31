import React from 'react'
import Topbar from '../components/appbar/Topbar';
import PostArea from '../components/postarea/PostArea';
import './Desktop.css';

function Desktop() {
    return (
        <div className="desktop">
            <Topbar />

            <div className="desktop-main-content">
                <div className="desktop-left">

                </div>
                <div className="desktop-right">
                    <PostArea />
                </div>
            </div>
            
        </div>
    )
}

export default Desktop
