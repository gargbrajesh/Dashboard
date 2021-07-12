import React from 'react'
import BodyData from '../BodyComponent/BodyData'
import Navbar from './Navbar'
import SideNav from './SideNav'
function header() {
    return (
        <div>
            <Navbar />
            <SideNav />
            <BodyData />
        </div>
    )
}

export default header
