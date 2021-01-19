import React, { Component } from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

class Content2 extends Component {
    

    render() {
        return (
            <div>
                <Navbar/>
                <SideBar/>
                <div>Content2</div>
            </div>
        )
    }


}



export default Content2;