import { useEffect, useState } from "react";
import "./App.css";
import { getCharacters } from "./getCharacters";
import Card from "./components/Card";

function App() {
    const [characterName, setCharacterName] = useState("");
    const [error, setError] = useState({ error: false, message: "" });
    const [cards, setCards] = useState([]);

    let handleSearch = async (event) => {
        event.preventDefault();
        let getChars = await getCharacters.get(`/${characterName}`);
        if (getChars.data.error) {
            setError({ error: true, message: getChars.data.error });
        } else {
            setError({ error: false, message: "" });
            setCards(getChars.data.results);
        }
    };

    let handleChange = (event) => {
        setCharacterName(event.target.value);
    };

    useEffect(() => {
        console.log(cards, "from app");
    }, [cards]);

    return (
        <div className="App">
            <form action="" onSubmit={handleSearch}>
                <input onChange={handleChange} value={characterName} type="text" name="search" id="search" placeholder="Search any superhero or supervillain" />
                <button type="submit">Seach</button>
            </form>
            <h1>Search Results</h1>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {error.error ? (
                    <div>
                        <h1>Oops, something went wrong</h1>
                        <h2>{error.message}</h2>
                    </div>
                ) : (
                    cards.map((card) => {
                        return <Card card={card} />;
                    })
                )}
            </div>
        </div>
    );
}

export default App;
