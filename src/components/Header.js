import React from "react"
import "../index.css";
import logo from "../assets/logo.png"
export default function Header(){
    return (
        <div id="header">
            <div className="row">
                <div style={{position:"relative"}} className="col-lg-8 col-md-9 col-sm-12">
                    <div id="title">
                        <h3>Moklet Laundry</h3>
                        <h4>Terdepan, Aktual, dan Terpercaya</h4>
                    </div>
                </div>
                <div style={{position:"relative"}} className="col-lg-4 col-md-3 col-sm-12">
                    <img src={logo}
                    style={{ display:"block", marginLeft:"auto", marginRight: "auto", marginTop:50 }} width="200" />
                </div>
            </div>
            
        </div>
    )
}