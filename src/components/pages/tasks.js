import axios from "axios";






import React, { Component, useCallback } from "react";
import { ReactDOM } from "react";


import Navigation from "./navbar";




import NewArray from "./task-text";







export default class Task extends Component {
    constructor() {
        super();

        this.state = {
            headingClass: "left",
            data: [],
            secondData: []
            
            
            
        }
        
        this.handleClick = this.handleClick.bind(this);
        this.getAllTask = this.getAllTask.bind(this);
    
    }

    


    getAllTask() {
        fetch("https://gentle-wave-19508.herokuapp.com/task/get")
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

   
    

    
    
    
    

    deleteTask() {

        
        axios
        .delete("https://gentle-wave-19508.herokuapp.com/task/delete/<id>")
        
        .then(console.log("click"))
    }
   

    
        // Syntax: condition ? < expression if true> : <expression if false></expression>
        

    
    

    



        handleClick(align) {
        
        
        this.setState({
            headingClass: align,
        })

        {

            
            if (align === "right")  {
                
                this.setState({
                    secondData: this.state.data,
                    data: []
                    
                })
            } else {
                    this.setState({
                        data: this.state.secondData,
                        secondData: []
                        
                    })
                }
            }
            console.log(this.state.data)
        
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
                            {/* <h3 className={this.state.headingClass}>{this.state.data.text}</h3> */}
                            <button className="good" onClick={ () => this.handleClick("right")} >Good</button>
                            <button className="progress" onClick={ () => this.handleClick("left")}>In Progress</button>
                            
                            
                        

                            
                        </div>


                        <div className="right-column">
                            <h3>Tasks Done</h3>
                            <div className="box">
                                <div className="text">
                                    <NewArray data = {this.state.secondData}/>
                                </div>
                                
                                
                                </div>

                        </div>
                    </div>
               
            </div>
        )
    }
}