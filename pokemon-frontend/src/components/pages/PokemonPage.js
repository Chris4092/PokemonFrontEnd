import PokemonList from "../PokemonList";
import SearchBar from "../SearchBar";
import React, {useEffect, useState} from "react";

export default function PokemonPage() {

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
        getData('/api/pokemon/without-moves').then((data) => setProductsState(data))
    }, [])




    const hasProducts = allProducts.length > 0
    return   (<div>
        <div>
            {hasProducts ? <SearchBar key={allProducts} products={allProducts} element={"pokemonList"}/> : "Loading..."}
        </div>
    </div>)
}