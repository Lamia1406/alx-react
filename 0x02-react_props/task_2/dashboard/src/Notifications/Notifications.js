import React from "react"
import "../Notifications/Notifications.css"
import {getLatestNotification} from "../utils/utils"
import closeIcon from "./close-icon.png"
import NotificationItem from "./NotificationItem"
export default function Notifications(){
    return <div className="Notifications">
        <button style={{float: "right"}} aria-label="Close" onClick={()=> console.log("Close button has been clicked")}>
            <img src={closeIcon} alt="Close Icon"></img>
        </button>
        <p>Here is the list of notifications</p>
        <ul>
            <NotificationItem type={"default"} value={"New course available"}/>
            <NotificationItem type={"urgent"} value={"New resume available"}/>
            <NotificationItem type={"urgent"} html={{__html: getLatestNotification()}}/>
        </ul>
    </div>
}