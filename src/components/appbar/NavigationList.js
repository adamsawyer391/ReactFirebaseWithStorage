import React from 'react'
import './NavigationList.css'

function NavigationList() {
    return (
        <div>
            <ul className="appbar-navigation-list">
                <li className="appbar-navigation-list-item">
                    Home
                </li>
                <li className="appbar-navigation-list-item-end">
                    Contact
                </li>
            </ul>
        </div>
    )
}

export default NavigationList
