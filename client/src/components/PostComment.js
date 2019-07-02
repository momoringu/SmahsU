import React, { Component } from 'react'

const Comment = (props) => {
    return (
        <div className= "PostComment">
            <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td className= "CommentContent">{props.data.content}</td>
                            </tr>
                            <tr>
                                <td className="CommentAuthor">Author: {props.data.author}</td>
                            </tr>
                        </tbody>
                    </table>
        </div>
    )
}

export default Comment