import React, { Component } from "react"
import Navigation from "./navbar"

import axios from "axios"





export default class taskManager extends Component {
    constructor() {
        super()

        this.state = {
            id: "",
            text: ""

        }
    
    
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.addTask = this.addTask.bind(this)
    
    }

    addTask() {
        axios
        .post("https://gentle-wave-19508.herokuapp.com/task/add",
            {
                text: this.state.name
            })
            .then((response) => {
                console.log(response.status, response.data);
            }).catch((error) => {
                console.log(error)
            });
    }

    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }

    

      buildForm() {
        let formData = new FormData();
      
        formData.append( this.state.data);
       
      
        return formData;
      }

      


      handleSubmit(event) {
        axios
        .post(
            "https://gentle-wave-19508.herokuapp.com/task/add",
            { 
                task: {
                    id: this.state.id,
                    text: this.state.text
            }
                
            })
            .then((response) => {
                response.json();
            }).catch((error) => {
                console.log(error)
            });

            
        
         
          
        
      
        
        event.preventDefault();
      }

    deleteTask() {
        axios
        .get("https://gentle-wave-19508.herokuapp.com/task/get")
        .then(result => {
            result.filter(result.id)
        })
        .delete("https://gentle-wave-19508.herokuapp.com/task/delete/<id>")
        
    }

    render() {
        return (
            <div className="task-manager-wrapper">
                <Navigation/>
                <div className="two-column">
                    <form  className="task-form-wrapper">
                    
                        <input
                            type="text"
                            name="name"
                            placeholder="Task"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />

                        


            
        
                    </form>


                    <div className="button-wrapper">
                        <button onClick={this.addTask}>Add Task</button>
                        <button onClick={this.deleteTask}>Remove Task</button>

                    </div>
                </div>
               
            </div>
        )
    }
}