import React, { Component } from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

class Content1 extends Component {
    

    render() {
        return (
            <div>
                <Navbar/>
                <SideBar/>
                <div>Content1</div>
            </div>
        );
    }


}



export default Content1;
