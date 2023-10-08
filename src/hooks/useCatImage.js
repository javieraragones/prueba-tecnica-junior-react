import { useState, useEffect } from 'react'
import { useCatFact } from './useCatFact'

const CAT_IMAGE_URL = 'https://cataas.com/cat/says/'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        if (!fact) return
        const threeWords = fact.split(" ").slice(0, 3).join(" ")

        console.log(threeWords)

        fetch(`${CAT_IMAGE_URL}${threeWords}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const url = response.url
                setImageUrl(url)
            })
    }, [fact])

    return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}