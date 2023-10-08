import { React, ReactDOM, useEffect } from "react"
import './App.css'
import { useState } from "react"
import { getRandomFact } from './services/facts.js'
import { useCatFact } from "./hooks/useCatFact"
import { useCatImage } from "./hooks/useCatImage"

//const RANDOM_FACT_URL = 'https://catfact.ninja/fact'
//const CAT_IMAGE_URL = 'https://cataas.com/cat/says/'
export function App() {
    //const [fact, setFact] = useState("Random cat fact")
    //const [imageUrl, setImgUrl] = useState(false)
    //const [button, setButton] = useState(false)

    //Solución inicial
    /*
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(RANDOM_FACT_URL);
            const data = await response.json();
            const fact = data.fact;
            console.log(fact)
            setFact(fact)

            const threeWords = fact.split(" ").slice(0, 3).join(" ")
            console.log(threeWords)

            const responseImg = await fetch(`${CAT_IMAGE_URL}${threeWords}`)
            const dataImg = await responseImg.url
            const img = `${dataImg}`
            setImgUrl(img)
            console.log(dataImg)
        }
        fetchData();
    }, []);

*/

    //SEGUNDA SOLUCIÓN AGREGANDO BOTÓN PARA ACTUALIZAR Y CON 2 USEEFFECT
    /*    
    useEffect(() => {
            async function fetchData() {
                const response = await fetch(RANDOM_FACT_URL);
                const data = await response.json();
                const fact = data.fact;
                console.log(fact)
                setFact(fact)
            }
            fetchData();
        }, [, button]);

    useEffect(() => {
            async function fetchData() {
                const threeWords = fact.split(" ").slice(0, 3).join(" ")
                console.log(threeWords)
    
                const responseImg = await fetch(`${CAT_IMAGE_URL}${threeWords}`)
                const dataImg = await responseImg.url
                const img = `${dataImg}`
                setImgUrl(img)
                console.log(dataImg)
            }
            fetchData();
        }, [fact])
    
        const handleClick = () => {
            setButton(!button)
        }
    */

    //---------SOLUCIÓN FINAL SEPARANDO CÓDIGO---------
    //servies/facts.js -> para la lógica de obtener un fact con fetch
    //components -> para el componente botón que genera un nuevo fact
    //hooks -> para los hooks de obtener fact e imagen
    const { fact, refreshFact } = useCatFact()
    const { imageUrl } = useCatImage({ fact })

    const handleClick = async () => {
        refreshFact()
    }
    return (
        <main>
            <h1>Random Cat Facts</h1 >
            <button onClick={handleClick}>Get new fact</button>
            {//<p>{fact}</p>
            }
            {//<img src={imageUrl} alt="Image of a cat fact" />
            }
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Image extracted using the first trhee words for ${fact}`} />}
        </main>
    )
}