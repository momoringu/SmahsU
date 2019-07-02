import React, { Component } from 'react'

import PreviewPost from './PreviewPost'

const data = [
    {
        "title": "Palus counter is amazing for neutral game, opinions?",
        "author": "Admin",
        "tag": "Palutena"
    },
    {
        "title": "Roy is better than Chrom, yeah right",
        "author": "Admin",
        "tag": "Roy"
    }
]

class Landing extends Component {
    render () {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">WELCOME</h1>
                    </div>
                </div>
                {/*<div className="jumbotron mt-5">*/}
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">Latest posts</h1>
                        
                        <PreviewPost data={data[0]} />
                        <PreviewPost data={data[1]} />
                    </div>
                {/*</div>*/}
            </div>
        )
    }
}

export default Landing