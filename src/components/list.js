import axios from "axios"
import React, { Component } from "react"


export default class List extends Component {
    constructor() {
        super()

        this.state = {
            task: ""
        }

    
    

        this.addTask = this.addTask.bind(this)
    }



    addTask = (id) => {
        axios
        .fetch(
            "postgresql://biqhualriwkteu:7b0aafffa35665ba7417f2e9c6a54cd4d5f6a15aa8340c7acbb779f92bebea75@ec2-44-192-245-97.compute-1.amazonaws.com:5432/d363duf4ilahub"
            )
            .then = (response) => {
                console.log("response", response)

            }

    }

    render() {
        return (
            <div className="list-wrapper">
                <div>

                </div>
            </div>
        )
    }
}