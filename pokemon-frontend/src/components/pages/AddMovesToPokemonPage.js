import React, {useEffect, useState} from "react";
import SearchBar from "../SearchBar";
import PokemonList from "../PokemonList";
import MoveList from "../MoveList";
import "../AddMovesToPokemonPage.css"


const AddMovesToPokemonPage = (props) => {



    const [allProducts, setProductsState] = useState([])
    const [allProducts2, setProductsState2] = useState([])

    // const [searchValuePokemon, setSearchValuePokemon] = useState("")
    //
    // const handleInputChange = (event) => {
    //     setSearchValuePokemon(event.target.value)
    // }
    //
    // const handleClearClick = () => {
    //     setSearchValuePokemon("")
    // }

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

    const [searchValue, setSearchValue] = useState("")

    const [idList, setIdList] = useState([])

    const selectMove = (idP) =>{
        var index = idList.indexOf(idP)
        if(index !== -1)
        {
            const array = idList;
            array.splice(index,1)
            setIdList(array)
            return
        }
        if(idList.length > 3)
        {
            alert("Already selected 4 moves")
            return
        }

        const array2 = idList;
        array2.push(idP)
        setIdList(array2)
    }


    async function handleMoveToPokemon() {
        // for (const item of idList) {
        //     let url = '/api/pokemon/' + id + '/moves/' + item
        //     const response = await fetch(url, {
        //         method: 'PUT',
        //         // mode: 'no-cors',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Accept': 'application/json'
        //         }
        //     })
        //     alert(response)
        // }
        let url = '/api/pokemon/create'
        const response = await fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                "id" : id,
                "idList" : idList,
                "level" : level
            })
        })
        window.location.href = '/custom-pokemon'
    }


    const [level, setLevel] = useState(-1)
    const [isLevelLegal, setIsLevelLegal] = useState(false)
    const handleInputChange = (event) => {
        setIsLevelLegal((event.target.value!=="" &&!isNaN(event.target.value) && 0 < parseInt(event.target.value) && parseInt(event.target.value) < 101));
        setSearchValue(event.target.value)
        setLevel(parseInt(event.target.value))
    }


    useEffect(() => {
        getData('/api/pokemon/without-moves').then((data) => setProductsState(data))
    }, [select])


    useEffect(() => {
        getData('/api/move').then((data) => setProductsState2(data))
    }, [selectMove])



    const hasProducts = allProducts.length > 0
    const hasProducts2 = allProducts2.length > 0
    return   (
        <div className={"split"}>
            <div className={"topv2 marg"}>
                <h2>Choose a pokemon from this list</h2>
                {hasProducts ? <PokemonList  products={allProducts} action={select} id={id} hasLevel={false}/> : "Loading..."}
            </div>
            <div className={"top"}>
                <div>{id !== -1 && idList.length > 0 && <h3>Enter the level of the pokemon</h3>}</div>
                <div className={"line"}>
                    <div>{id !== -1 && idList.length > 0 && <input className={"restrict-size"} type="text"  value={searchValue} onChange={handleInputChange}/>  }</div>
                    <div>{id !== -1 && idList.length > 0 && !isLevelLegal && <h3 className={"space"}>Level must be an integer between 1 and 100</h3> }</div>
                </div>
                <div>
                {id !== -1 && idList.length > 0 && isLevelLegal &&<button onClick={async() => { await handleMoveToPokemon()}} className={"center"}><h1>Create Pokemon with these custom moves</h1></button>}
                </div>

            </div>
            <div className={"topv2"}>
                <h2>Choose one to four moves from this list</h2>
                {hasProducts2 ? <MoveList products={allProducts2} action={selectMove} idList={idList}/> : "Loading..."}
            </div>
        </div>
    )

}
export default AddMovesToPokemonPage