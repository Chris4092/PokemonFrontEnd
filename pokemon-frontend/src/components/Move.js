import React from "react";
import "./Move.css"

const Move = (props) => {

    const str = "normal white"
    let elementalType = props.product.elementalType + " white"
    let damageType = props.product.damageType + " white"

    return(
        <tr onClick={props.action.bind(this,props.product.id)} className={props.idList.some(item => item === props.product.id) ? "selected" : ""}>
            <td>{props.product.name}</td>
            <td className={elementalType.toLowerCase()}>{props.product.elementalType.toLowerCase()}</td>
            <td className={damageType.toLowerCase()} >{props.product.damageType.toLowerCase()}</td>
            <td>{props.product.power}</td>
            <td>{props.product.accuracy}</td>
        </tr>
    )
}

export default Move