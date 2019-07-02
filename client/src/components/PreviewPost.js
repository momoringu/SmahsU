import React, { Component } from 'react'

const Profile = (props) => {
    return (
        <div className= "PreviewPost">
            <div className="PreviewAuthorTag">
                <span class="author">Author: {props.data.author}</span>
                <span>Character: {props.data.tag}</span>
            </div>
        <div className= "PreviewTitle" href="#"><h5>{props.data.title}</h5></div>
        <div className= "PreviewComments" href="#">7777 Comments</div>
        </div>
    )
}

export default Profile
