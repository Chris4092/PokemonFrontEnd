import "./Navbar.css"

export default function Navbar(){
    return <nav className={"nav"}>
        <a href={"/"} className={"site-title"}>Nuzlocke Assistant</a>
        <ul>
            <li>
                <a href={"/pokemons"}>Pokemon</a>
            </li>
            <li>
                <a href={"/custom-pokemon"}>Pokemon with moves</a>
            </li>
            <li>
                <a href={"/moves"}>Moves</a>
            </li>
        </ul>
    </nav>
}