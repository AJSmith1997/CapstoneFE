import React, { Component } from "react"
import Navigation from "./navbar"

export default class taskManager extends Component {
    constructor() {
        super()

        this.state = {}
    }

    render() {
        return (
            <div className="">
                <Navigation/>
                <h2>Task Manager</h2>
            </div>
        )
    }
}