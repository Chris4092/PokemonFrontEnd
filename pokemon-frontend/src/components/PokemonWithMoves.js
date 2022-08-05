import "./PokemonWithMoves.css"
import React from "react";

const PokemonWithMoves = (props) => {
    let type1 = props.product.type1.toString().toLowerCase()
    // let type2 = "a"
    let type2 = props.product.type2.toString().toLowerCase()
    const has2types = type2 !== ""
    let type1Style = type1 + " white"
    let type2Style = type2 + " white"
    const noMoves = props.product.moves.length

    const myMoves = [].concat(props.product.moves)
        .sort((a,b) => a.id < b.id ? 1 : -1)
    let sprite = "pokemon/" + props.product.imageSprite
    return(
        <tr onClick={props.action.bind(this,props.product.id)} className={props.idList.some(item => item === props.product.id) ? "selected" : ""}>
            <td><img src={sprite} alt={"sprite"}/> </td>
            <td>{props.product.name}</td>
            {!has2types && <td colSpan={2} className={type1Style}> {type1} </td>}
            {has2types && <td className={type1Style}>{type1}</td>}
            {has2types && <td className={type2Style}>{type2}</td>}
            <td>
                <tr className={"padding-zero"}>
                    {myMoves.length > 0 ? <td className={myMoves[0].elementalType.toString().toLowerCase() + " white "}>{myMoves[0].name}</td> : <td></td>}
                    {myMoves.length > 1 ? <td className={myMoves[1].elementalType.toString().toLowerCase() + " white "}>{myMoves[1].name}</td> : <td></td>}
                </tr>
                <tr className={"padding-zero"}>
                    {myMoves.length > 2 ? <td className={myMoves[2].elementalType.toString().toLowerCase() + " white "}>{myMoves[2].name}</td> : <td></td>}
                    {myMoves.length > 3 ? <td className={myMoves[3].elementalType.toString().toLowerCase() + " white "}>{myMoves[3].name}</td> : <td></td>}
                </tr>
            </td>
            <td>{props.product.level}</td>
        </tr>
    )

}

export default PokemonWithMoves