import {useState} from "react";
import "./SearchBar.css"
import MoveList from "./MoveList";
import PokemonList from "./PokemonList";
import PokemonWithMovesList from "./PokemonWithMovesList";

const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState("")

    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }

    const handleClearClick = () => {
        setSearchValue("")
    }

    const empty = () => {

    }

    const shouldDisplayButton = searchValue.length > 0
    const shouldDisplayMoveList = props.element === "moveList"
    const shouldDisplayPokemonList = props.element === "pokemonList"
    const shouldDisplayPokemonWithMovesList = props.element === "pokemonWithMovesList"
    console.log(props.products)

    const filteredProducts = props.products.filter((product) => {
        return product.name.includes(searchValue)
    })

    return (
        <div className={"center2"}>
            <div className={"separate"}>
                {shouldDisplayMoveList && <div className={"writing"}>
                    List of moves
                </div>}
                {shouldDisplayPokemonList && <div className={"writing"}>
                    List of pokemon
                </div>}
                {shouldDisplayPokemonWithMovesList && <div className={"writing"}>
                    List of pokemon with moves
                </div>}
                <div className={"group"}>
                    <input type="text" value={searchValue} onChange={handleInputChange}/>
                    {shouldDisplayButton && <button onClick={handleClearClick}>clear</button>}
                </div>
            </div>

            <div className={"top"}>
                {shouldDisplayMoveList && <MoveList  products={filteredProducts} action={empty} idList={[]}/>}
                {shouldDisplayPokemonList && <PokemonList  products={filteredProducts} action={empty} id={-1} hasLevel={false}/>}
                {shouldDisplayPokemonWithMovesList && <PokemonWithMovesList  products={filteredProducts} action={props.action} idList={[]} id={props.id}/>}
            </div>

        </div>

    )


}

export default SearchBar