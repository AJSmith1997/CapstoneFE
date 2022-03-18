import axios from "axios";
import React, { Component } from "react";
import { ReactDOM } from "react";


import Navigation from "./navbar";










export default class Task extends Component {
    constructor() {
        super();

        this.state = {
            headingClass: "left",
            text:"",
            data: {}
            
            
            
        }
        
        this.handleClick = this.handleClick.bind(this);
        // this.getTasks = this.getTasks.bind(this);
    
    }

    getTasks() {

         


       
    }
    componentDidMount() {
        
        let data = {}
       
        this.setState({
            
            loading: true
        }, () => {
            
            
            fetch("http://localhost:5000/task/get")
            .then(response => response.json())
            
            .then(response => { console.log(response), this.setState({
                text: response.filter().text,
                id: response.filter().id.first()
            })})
            .catch(console.log);
        });

        
    }

    
    
    
    
   
    

    



    handleClick(align) {
        
        
        this.setState({
            headingClass: align,
            
            
        })
        
        
    }

    render() {
        
        // if (this.state.text.length === 0){
        //     return false
        // }
        return (
            <div className="page-wrapper">

                <Navigation />
                <div className="textarea-wrapper">
                    
                    <div className="left-column">
                        <h3>Tasks To Do</h3>
                        <div className="box">
                            <div className="text">
                                {this.state.data.text}
                            </div>
                        </div>
                    </div>

                    <div className="alignment-wrapper">
                        <h3 className={this.state.headingClass}></h3>
                        <button className="good" onClick={ () => this.handleClick("right")} >Good</button>
                        <button className="progress" onClick={ () => this.handleClick("left")}>In Progress</button>
                        <button className="down" onClick={ () => this.handleClick("left")}>Down</button>
                        
                    </div>


                    <div className="right-column">
                        <h3>Tasks Done</h3>
                        <div className="box">
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}