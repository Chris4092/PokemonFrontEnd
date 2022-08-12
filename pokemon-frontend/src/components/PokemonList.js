import "./PokemonList.css"
import Pokemon from "./Pokemon";
import React, {useState} from "react";

const PokemonList = (props) => {




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
                </tr>
                {props.products.map((product) => {
                    return <Pokemon  product={product} action={props.action} id={props.id} hasLevel={props.hasLevel}/>
                })}
                </tbody>
            </table>
        </div>

    )
}

export default PokemonList