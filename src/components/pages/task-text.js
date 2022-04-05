import React from "react"






const NewArray = (props) => {
    
    const array = props.data.map(item => {
        return (
            <div className="text-wrapper">
                {item.text}
            </div>
        )
    })



return array


}



    



export default NewArray;



