import React from 'react'
// import { makeStyles } from '@material-ui/core';
import Appbar from '@material-ui/core/AppBar';
import './Topbar.css';
import Searchbar from './Searchbar';
import NavigationList from './NavigationList';

// const useStyles = makeStyles(theme => ({
//     root: theme.mixins.toolbar,
//     text: {
//         padding: 15,
//     }
// }))

const url = "https://i0.wp.com/sitn.hms.harvard.edu/wp-content/uploads/2020/07/Mars_zichtbaar_vanaf_de_alpe_du_hues-scaled.jpg?resize=1920%2C768&ssl=1";
// const hamburger_icon = "https://www.clipartmax.com/png/middle/36-365828_navbar-toggle-icon-menu-hamburger-png-white.png";
const hamburger_icon = "https://www.pngkey.com/png/full/332-3321462_mobile-menu-for-barefoot-resort-vacations-hamburger-menu.png";

function Topbar() {

    // const classes = useStyles();

    return (
        <div>
            <Appbar position="static" className="appbar">
                <div className="topbar-flex-main">
                    <div className="topbar-flex">
                        <img className="topbar-image-menu" src={hamburger_icon} alt="" />
                        <h1 className="appbar-bash-title">
                            Space News
                        </h1>
                        <Searchbar />
                    </div>
                    <div className="topbar-flex">
                        <NavigationList />
                        <img className="topbar-image" src={url} alt="" />
                    </div>
                    {/* <img className="topbar-image-menu" src={hamburger_icon} alt="" /> */}
                    
                    
                </div>
                
            </Appbar>
        </div>
    )
}

export default Topbar
