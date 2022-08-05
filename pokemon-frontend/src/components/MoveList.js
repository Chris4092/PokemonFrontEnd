import Move from "./Move";
import React from "react";
import "./MoveList.css"
import {useState} from "react";


const MoveList = (props) => {




    // return(
    //     <div>sal</div>
    // )
    return(
        <div>
            
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Category</th>
                        <th>Power</th>
                        <th>Accuracy</th>
                    </tr>
                    {props.products.map((product) => {
                        return <Move  product={product} action={props.action} idList={props.idList}/>

                    })}
                    </tbody>
            </table>
        </div>

    )
}

export default MoveList