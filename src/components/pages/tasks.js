import axios from "axios";






import React, { Component, useCallback } from "react";
import { ReactDOM } from "react";


import Navigation from "./navbar";




import NewArray from "./task-text";
import Modal from "./modal-show";






export default class Task extends Component {
    constructor() {
        super();

        this.state = {
            headingClass: "left",
            data: []
            
            
            
        }
        
        this.handleClick = this.handleClick.bind(this);
        this.getAllTask = this.getAllTask.bind(this);
    
    }

    


    getAllTask() {
        fetch("http://127.0.0.1:5000/task/get")
        .then(result => result.json())
        .then(result => {
            this.setState({
                data: result
            })
            
        })
        
    }

    
    componentDidMount() {
      
     this.getAllTask()
         
    }

   
    

    
    
    
    addTask() {
        axios
        .post("http://127.0.0.1:5000/task/add")
        
        .then(result => {
            return result
        })
        
    }

    deleteTask() {

        
        axios
        .delete("http://127.0.0.1:5000/task/delete/<id>")
        
        .then(console.log("click"))
    }
   
    

    



    handleClick(align) {
        
        
        this.setState({
            headingClass: align,
        })

        
            

        
        
        
    }

    render() {
        
       

        // let newData = this.state.data.map(item => {
        //     text = item.text,
        //     id = item.id
            
        // })
        
        



    

    //     const dataFunction = newData.map(function(id,text){
    //        return {key:id, value: text };
    //     })

    //     newData.forEach(function(id,text){
    //         console.log(id + "=" + text)
    //     })

    //     const keys = Object.keys(newData)

        
    //    keys.forEach((key,index) => {
    //        console.log(`${key}: ${newData[index]}`)
           
    //    });
        
    //     const textManager =() => {
    //         let texer = this.state.data.map(item => {
    //         return (
    //             <div key={item.id}>

    //                 <div className="text-content">
    //                     <div className="text">{item.text}</div>
    //                 </div>
    //             </div>
    //         );
    //     })
        
    // }

    

        

        

        
       
        return (
            <div className="page-wrapper">

                <Navigation />
                <div className="textarea-wrapper">
                    
                    <div className="left-column">
                        <h3>Tasks To Do</h3>
                        <div className="box" >
                            <div className="text" align={this.state.headingClass}>
                             <NewArray data = {this.state.data} />
                            </div>
                        </div>
                    </div>

                    <div className="alignment-wrapper">
                        <h3 className={this.state.headingClass}>{this.state.data.text}</h3>
                        <button className="good" onClick={ () => this.handleClick("right")} >Good</button>
                        <button className="progress" onClick={ () => this.handleClick("left")}>In Progress</button>
                        <button className="down" onClick={ () => this.handleClick("left")}>Down</button>
                        <button className="add" onClick={this.addTask}>Add Task</button>
                        <button className="delete" onClick={this.deleteTask}>Delete Task</button>
                        <Modal show={this.state.show} handleClose={this.hideModal}>
                            <p>Modal</p>
                        </Modal>

                        
                    </div>


                    <div className="right-column">
                        <h3>Tasks Done</h3>
                        <div className="box">
                            <div className="text">
                                {this.handleClick}
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}