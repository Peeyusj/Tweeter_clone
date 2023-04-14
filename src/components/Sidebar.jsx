import React from 'react'
import '../styles/sidebar.css'

let Links=[{image:"./images/twitter.png",links:""},{image:"./images/home.png",links:"Home"},{image:"./images/bell.png",links:"Notification"},
{image:"./images/email.png",links:"Message"},{image:"./images/bookmark.png",links:"Bookmark"},{image:"./images/clipboard.png",links:"List"},
{image:"./images/user.png",links:"Profile"},{image:"./images/more.png",links:"More"},]



export default function Sidebar() {
  return (
    <div className='sidebar'>
     <div className="sidebarLinks">
      <ul>
        {
          Links.map((data)=>
            <li> <img style={{width:"25px",marginRight:"3px"}} src={data.image} alt="" /><a href="http://"  target="_blank">{data.links}</a></li>
)

        }
        </ul>
        <button id='twtbtn'>Tweet</button>
     </div>
    </div>
  )
}

