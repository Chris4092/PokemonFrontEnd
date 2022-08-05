import {useState} from "react";
import PokemonWithMovesList from "../PokemonWithMovesList";
import "../AddTrainerPage.css"
import React from "react";
import {useEffect} from "react";


const AddTrainerPage = (props) => {

    let [trainerName, trainerNameSet] = useState("")
    let [trainerNumber, trainerNumberSet] = useState("")

    const updateName = (event) => {
        trainerNameSet(event.target.value)
    }

    const updateNumber = (event) => {
        trainerNumberSet(event.target.value)
    }

    async function handleTrainerToPokemon() {
        if(trainerName!=="" && !isNaN(parseInt(trainerNumber)))
        {
            let url = '/api/trainer/withPokemonList'
            const response = await fetch(url,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    "name" : trainerName,
                    "number" : trainerNumber,
                    "idList" : idList
                })
            })
            alert(response.statusText)
            window.location.href = '/'
        }
        else
        {
            alert("Trainer name must not be empty and trainer number must be a positive integer")
        }
    }


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

    const [allProducts, setProductsState] = useState([])





    const [idList, setIdList] = useState([])

    const selectPokemon = (idP) =>{
        var index = idList.indexOf(idP)
        if(index !== -1)
        {
            const array = idList;
            array.splice(index,1)
            setIdList(array)
            return
        }
        if(idList.length > 5)
        {
            alert("Already selected 6 pokemon")
            return
        }

        const array2 = idList;
        array2.push(idP)
        setIdList(array2)
    }

    // const deleteTrainer = (idTrainer)


    useEffect(() => {
        getData('/api/pokemon/with-moves').then((data) => setProductsState(data))
    }, [selectPokemon])
    return (
        <div>
            <div className={"trainer-center"}>
                <div className={"trainer-title"}>Create a new trainer</div>
                <div className={"add-trainer-name"}>
                    <div className={"add-trainer-name-text"}>Trainer name:</div>
                    <input className={"add-trainer-name-input"} type={"text"} value={trainerName} onChange={updateName}/>
                </div>
                <div className={"add-trainer-name"}>
                    <div className={"add-trainer-name-text"}>Trainer number:</div>
                    <input className={"add-trainer-name-input"} type={"text"} value={trainerNumber} onChange={updateNumber}/>
                </div>
                <div className={"add-trainer-pokemons"}>
                    <div className={"add-trainer-name-text"}>Select up to 6 pokemon</div>
                </div>
                <div className={"add-trainer-pokemons"}>
                    <PokemonWithMovesList key={allProducts} products={allProducts} action={selectPokemon} idList={idList}/>
                </div>
            </div>
            <div className={"add-trainer-button-holder"}>
                {idList.length > 0 && <button onClick={async() => { await handleTrainerToPokemon()}} className={"add-trainer-button"}><h1>Add trainer</h1></button>}
            </div>

        </div>
    )
}

export default AddTrainerPage