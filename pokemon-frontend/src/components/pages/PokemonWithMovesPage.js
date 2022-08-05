import React, {useState} from "react";
import SearchBar from "../SearchBar";
import "../PokemonWithMovesPage.css"
import {useEffect} from "react";

export default function PokemonWithMovesPage() {
    const [allProducts, setProductsState] = useState([])

    async function getData(url = '')
    {
        const response = await fetch(url, {
            mode:'no-cors',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        return response.json()
    }

    useEffect(() => {
        getData('/api/pokemon/with-moves').then((data) => setProductsState(data))
    }, [])




    const hasProducts = allProducts.length > 0
    return   (<div>
        <div className={"centerAll"}>
            <button onClick={event =>  window.location.href='/create-custom-pokemon'} className={"center"}><h2 className={"button"}>Create a custom pokemon</h2></button>
            {hasProducts ? <SearchBar  products={allProducts} element={"pokemonWithMovesList"}/> : <h1>Try adding some custom pokemon</h1>}

        </div>
    </div>)
}