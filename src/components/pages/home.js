import React, { Component } from "react"
import axios from "axios"

import Login from "../auth/login"
import Navigation from "./navbar"

export default class Home extends Component {
    constructor() {
        super()

        this.state = {
            email: "",
            password: "",
            errorText:""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)


    };

    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value,
          errorText: ""
        });
      }

    
      handleSubmit(event) {
        axios
          .post(
            "postgresql://biqhualriwkteu:7b0aafffa35665ba7417f2e9c6a54cd4d5f6a15aa8340c7acbb779f92bebea75@ec2-44-192-245-97.compute-1.amazonaws.com:5432/d363duf4ilahub",
            {
              client: {
                email: this.state.email,
                password: this.state.password
              }
            },
            { withCredentials: true }
          )
          .then(response => {
            if (response.data.status === "created") {
              this.props.handleSuccessfulAuth();
            } else {
              this.setState({
                errorText: "Wrong email or password"
              });
              this.props.handleUnsuccessfulAuth();
            }
          })
          .catch(error => {
            this.setState({
              errorText: "An error occurred"
            });
            
          });
    
        event.preventDefault();
      }
    

    render() {
        return (
           <div className="page-wrapper">
               <Navigation />
               <div className="content-background">

                <div className="content-wrapper">
                  
                    

                    <div className="content">
                      <div className="welcome-wrapper">
                      
                        <h2>Welcome!</h2>
                      
                        <h3>Please login to continue</h3>

                      </div>



                        <div className="form-group">
                    
                            <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            />
                        </div>

                        <div className="form-group">
                            
                            <input
                            type="password"
                            name="password"
                            placeholder="Your password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            />
                        </div>

                        <div className="button-wrapper">
                          <button type="submit" onClick={this.handleSubmit}>Login</button>
                        </div>

                    </div>
                  </div>
                </div>
            </div>
        )
    }
}