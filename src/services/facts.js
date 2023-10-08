const RANDOM_FACT_URL = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
    const response = await fetch(RANDOM_FACT_URL);
    const data = await response.json();
    const fact = data.fact;
    console.log(fact)
    return fact
}
