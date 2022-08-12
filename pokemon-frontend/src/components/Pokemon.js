import "./Pokemon.css"
import React from "react";

const Pokemon = (props) => {
    let type1 = props.product.type1.toString().toLowerCase()
    // let type2 = "a"
    let type2 = props.product.type2.toString().toLowerCase()
    const has2types = type2 !== ""
    let type1Style = type1 + " white"
    let type2Style = type2 + " white"
    let sprite = "pokemon/" + props.product.imageSprite
    return(
        <tr onClick={props.action.bind(this,props.product.id)} className={props.id === props.product.id ? "selected" : ""}>
            <td ><img src={sprite} alt={"sprite"}/> </td>
            <td>{props.product.name}</td>
            {!has2types && <td colSpan={2} className={type1Style}> {type1} </td>}
            {has2types && <td className={type1Style}>{type1}</td>}
            {has2types && <td className={type2Style}>{type2}</td>}
            {props.hasLevel && <td>{props.product.level}</td>}
        </tr>
    )

}

export default Pokemon