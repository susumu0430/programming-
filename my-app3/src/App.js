
import { useEffect, useState } from 'react';
import './App.css';
import { getAllPokemon, getPokemon } from './utils/pokemon';
import { Card } from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';
// import { get } from 'http';

function App() {
const initialURL ="https://pokeapi.co/api/v2/pokemon";
const [loading, setLoading] =useState(true);
const [pokemonData, setPokemonData] = useState([])
const [nextURL, setNextURL] = useState("")
const [prevURL, setPrevURL] = useState("")

useEffect(() => {
  const fetchPokemonData = async () => {
    //全てのポケモンデータを取得
    let res = await getAllPokemon(initialURL)
    //各ポケモンの詳細なデータを取得
    loadPokemon(res.results)
    // console.log(res.next)
    setNextURL(res.next)
    setPrevURL(res.previous)
    setLoading(false)
  };
  fetchPokemonData()
}, []);

const loadPokemon=async(deta) =>{
  let _pokemonData = await Promise.all(
    deta.map((pokemon) => {
      // console.log(pokemon)
      let pokemonRecord = getPokemon(pokemon.url);
      return pokemonRecord
    })
  )
  setPokemonData(_pokemonData)
}
// console.log(pokemonData)

const handleNextPage = async () => {
  setLoading(true);
  let data = await getAllPokemon(nextURL);
  await loadPokemon(data.results)
  setNextURL(data.next)
  setPrevURL(data.previous)
  setLoading(false)
}
const handlePrevPage = async () => {
if(!prevURL) return;

  setLoading(true);
let data = await getAllPokemon(prevURL);
await loadPokemon(data.results)
setNextURL(data.next)
setPrevURL(data.previous)
setLoading(false)
}

  return (
<>   
<Navbar />
<div div className='App'>
  {loading ? (
    <h1>ロード中・・・</h1>
  ): <>
    <div className="pokemonCardContainer">
      {pokemonData.map((pokemon, i) => {
        return <Card key={i} pokemon={pokemon}/>
      })}
      </div> 
      <div className="btn">
       <button onClick={handlePrevPage}>前へ</button>
       <button onClick={handleNextPage}>次へ</button> 

      </div>
  </>}
</div>
</>
  );
}

export default App;
