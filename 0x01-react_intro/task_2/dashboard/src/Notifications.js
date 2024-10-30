import React from "react"
import "./Notifications.css"
import {getLatestNotification} from "./utils"
import closeIcon from "./close-icon.png"
export default function Notifications(){
    return <div className="Notifications">
        <button style={{float: "right"}} aria-label="Close" onClick={()=> console.log("Close button has been clicked")}>
            <img src={closeIcon} alt="Close Icon"></img>
        </button>
        <p>Here is the list of notifications</p>
        <ul>
            <li data='default'>New course available</li>
            <li data='urgent'>New resume available</li>
            <li data='urgent' dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
        </ul>
    </div>
}