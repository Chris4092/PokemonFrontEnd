import PokemonWithMovesList from "./PokemonWithMovesList";
import "./Trainer.css"

const Trainer = (props) => {


    function empty(){

    }


    const myPokemons = [].concat(props.product.pokemons)
        .sort((a,b) => a.id < b.id ? 1 : -1)




    return <div onClick={props.action.bind(this,props.product.id)} className={props.id === props.product.id ? "selected-trainer trainer-center-div" : "trainer-center-div"}>
        <div className={"trainer-name"}>
            {props.product.name}, Trainer No. {props.product.number}
        </div>
        <div className={"trainer-pokemon"}>
            List of pokemon
        </div>
        <div className={"pokemon-list"}>
            <PokemonWithMovesList key={myPokemons} products={myPokemons} action={empty} idList={[]}></PokemonWithMovesList>
        </div>
    </div>

}

export default Trainer