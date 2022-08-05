import "./PokemonList.css"
import Pokemon from "./Pokemon";
import React from "react";
import PokemonWithMoves from "./PokemonWithMoves";

const PokemonWithMovesList = (props) => {




    // return(
    //     <div>sal</div>
    // )
    return(
        <div>
        <table>
            <tbody>
            <tr>
                <th></th>
                <th>Name</th>
                <th colSpan={2}>Type</th>
                <th>Moves</th>
                <th>Level</th>
            </tr>
            {props.products.map((product) => {
                return <PokemonWithMoves product={product} action={props.action} idList={props.idList}/>
            })}
            </tbody>
        </table>
        </div>
    )
}

export default PokemonWithMovesList