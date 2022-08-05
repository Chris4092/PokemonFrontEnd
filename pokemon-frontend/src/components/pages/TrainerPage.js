import React, {useState} from "react";
import SearchBar from "../SearchBar";
import TrainerList from "../TrainerList"
import "../PokemonWithMovesPage.css"
import {useEffect} from "react";
import "../TrainerPage.css"

export default function TrainerPage() {

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
    }, [id])

    console.log(allProducts)
    const hasProducts = allProducts.length > 0

    async function handleDeleteTrainer(){
        let url = '/api/trainer/' + id
        const response = await fetch(url,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })
        alert(response.statusText)
        window.location.href = '/'
    }


    return   (<div>
        <button onClick={event =>  window.location.href='/add-trainer'} className={"center"}><h2 className={"button"}>Create a custom trainer</h2></button>
        <div>
            {hasProducts ? <TrainerList key={allProducts} products={allProducts} action={select} id={id} /> : "Try adding some custom trainers..."}
        </div>
        <div className={"delete-trainer-button-holder"}>
            {id!==-1 && <button onClick={async() => { await handleDeleteTrainer()}} className={"delete-trainer-button"}><h1>Delete trainer</h1></button>}
        </div>
    </div>)

}