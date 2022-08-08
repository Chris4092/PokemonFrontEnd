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

    const [id, setId] = useState(-1)

    const select = (idP) =>{
        if(idP === id)
        {
            setId(-1)
        }
        else
        {
            setId(idP)
        }
    }

    async function handleDeletePokemon(){
        let url = '/api/pokemon/' + id
        const response = await fetch(url,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })
        alert(response.statusText)
        window.location.href = '/custom-pokemon'
    }


    const hasProducts = allProducts.length > 0
    return   (<div>
        <div className={"centerAll"}>
            <button onClick={event =>  window.location.href='/create-custom-pokemon'} className={"center"}><h2 className={"button"}>Create a custom pokemon</h2></button>
            {hasProducts ? <SearchBar  products={allProducts} element={"pokemonWithMovesList"} action={select} id={id}/> : <h1>Try adding some custom pokemon</h1>}
        </div>
        <div className={"delete-pokemon-button-holder"}>
            {id!==-1 && <button onClick={async() => { await handleDeletePokemon()}} className={"delete-pokemon-button"}><h1>Delete pokemon</h1></button>}
        </div>
    </div>)
}