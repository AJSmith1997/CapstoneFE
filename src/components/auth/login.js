import React, { Component } from "react"

export default class Login extends Component {
    constructor() {
        super()

        this.state = {
            LoggedInStatus: "NOT_LOGGED_IN"
        }
    
        this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this)
    }

    handleSuccessfulLogin() {
        this.setState({
            loggedInStatus: "LOGGED_IN"
        })
    }

    checkLoginStatus() {
        return axios
          .get("postgresql://biqhualriwkteu:7b0aafffa35665ba7417f2e9c6a54cd4d5f6a15aa8340c7acbb779f92bebea75@ec2-44-192-245-97.compute-1.amazonaws.com:5432/d363duf4ilahub", {
            withCredentials: true
          })
          .then(response => {
            const loggedIn = response.data.logged_in;
            const loggedInStatus = this.state.loggedInStatus;
    
            if (loggedIn && loggedInStatus === "LOGGED_IN") {
              return loggedIn;
            } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
              this.setState({
                loggedInStatus: "LOGGED_IN"
              });
            } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
              this.setState({
                loggedInStatus: "NOT_LOGGED_IN"
              });
            }
          })
          .catch(error => {
            console.log("Error", error);
          });
      }
    

    render() {
        return (
            <div className="">
                
            </div>
        )
    }
}