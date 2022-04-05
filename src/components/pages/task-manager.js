import React, { Component } from "react"
import Navigation from "./navbar"

import axios from "axios"



export default class taskManager extends Component {
    constructor() {
        super()

        this.state = {
            id: "",
            text: {text: ""}

        }
    
    
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    
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
        axios.post(
            "http://127.0.0.1:5000/task/get",
          this.buildForm(),
          
        );
      
        this.props.handleSuccessfullFormSubmission(this.state);
        event.preventDefault();
      }

    deleteTask() {
        axios
        .get("http://127.0.0.1:5000/task/get")
        .then(result => {
            result.filter(result.id)
        })
        .delete("http://127.0.0.1:5000/task/delete/<id>")
        
    }

    render() {
        return (
            <div className="task-manager-wrapper">
                <Navigation/>
                <div className="two-column">
                    <form  className="portfolio-form-wrapper">
                    
                        <input
                            type="text"
                            name="name"
                            placeholder="Task"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />

                        
                    

            
        
                    </form>


                    <div className="button-wrapper">
                        <button onClick={this.handleSubmit}>Add Task</button>
                        <button onClick={this.deleteTask}>Remove Task</button>

                    </div>
                </div>
               
            </div>
        )
    }
}