import React, {useState} from "react";
import SearchBar from "../SearchBar";
import TrainerList from "../TrainerList"
import "../PokemonWithMovesPage.css"
import {useEffect} from "react";

export default function TrainerPage() {

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
        getData('/api/trainer').then((data) => setProductsState(data))
    }, [])

    console.log(allProducts)
    const hasProducts = allProducts.length > 0

    return   (<div>
        <button onClick={event =>  window.location.href='/add-trainer'} className={"center"}><h2 className={"button"}>Create a custom trainer</h2></button>
        <div>
            {hasProducts ? <TrainerList key={allProducts} products={allProducts} /> : "Try adding some custom trainers..."}
        </div>
    </div>)

}