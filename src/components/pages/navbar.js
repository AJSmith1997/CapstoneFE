import React from "react"
import { NavLink } from "react-router-dom"
import { Router, Route, Switch } from "react-router"

import Home from "./home";

export default function Navigation(props) {
        return (
            <div className="navigation-wrapper">
                
                    <div>
                        <h1>Task Manager</h1>
                    </div>
                    <div className="navbar">
                        
                        
                        <div className="nav-link-wrapper">
                            <div>
                                <NavLink to="/" className="link" activeClassName="active-link">Home</NavLink>
                            </div>
                            <div>
                                <NavLink to="/tasks" className="link" activeClassName="active-link">Tasks</NavLink>
                            </div>
                            <div>
                                <NavLink to="/task-manager" className="link" activeClassName="active-link">Task Manager</NavLink>
                            </div>
                        </div>
                    </div>
            </div>
            
        )
    }
