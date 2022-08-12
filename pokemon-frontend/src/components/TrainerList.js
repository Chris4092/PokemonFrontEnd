import Move from "./Move";
import React from "react";
import Trainer from "./Trainer";

const TrainerList = (props) => {

    return(
        <div>
            {props.products.map((product) => {
                return <Trainer key={product} product={product} action={props.action} id={props.id}/>
            })}
        </div>
    )

}


export default TrainerList