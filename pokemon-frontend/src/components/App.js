import React, {useEffect, useState} from "react";
import Move from "./Move";
import MoveList from "./MoveList";
import SearchBar from "./SearchBar"
import "./SearchBar.css"
import Navbar from "./Navbar";
import Pokemon from "./Pokemon";
import PokemonList from "./PokemonList";
import PokemonWithMoves from "./PokemonWithMoves";
import TrainerPage from "./pages/TrainerPage";
import MovePage from "./pages/MovePage";
import PokemonWithMovesPage from "./pages/PokemonWithMovesPage";
import PokemonPage from "./pages/PokemonPage";
import AddMovesToPokemonPage from "./pages/AddMovesToPokemonPage";
import AddTrainerPage from "./pages/AddTrainerPage";



// const allProducts=[
//     {
//         name: "Pound",
//         power: "40",
//         damageType: "physical",
//         elementalType: "normal",
//         accuracy: "95%"
//     },
//     {
//         name: "Toxic",
//         power: "0",
//         damageType: "status",
//         elementalType: "poison",
//         accuracy: "100%"
//     },
//
// ]

const App = () => {


    let component
    switch (window.location.pathname) {
        case "/":
            component = <TrainerPage />
            break
        case "/moves":
            component = <MovePage />
            break
        case "/pokemons":
            component = <PokemonPage />
            break
        case "/custom-pokemon":
            component = <PokemonWithMovesPage />
            break
        case "/create-custom-pokemon":
            component = <AddMovesToPokemonPage />
            break
        case "/add-trainer":
            component = <AddTrainerPage/>
            break
    }



    return(
        <div>
            <Navbar/>
            {component}

        </div>
    )
}



export default App