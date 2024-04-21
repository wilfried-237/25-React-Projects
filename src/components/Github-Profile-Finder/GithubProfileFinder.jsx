import "./index.css";
import { useEffect, useState } from "react";
import UserProfil from "./UserProfil";

function GithubProfileFinder() {

  const [input, setInput] = useState("wilfried237")
  const [getData, setGetData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [getErrors, setGetErrors] = useState(null)

  async function fetchData(getInput){
      
    try{
      setLoading(true)
      const response = await fetch(`https://api.github.com/users/${getInput}`)

      const data = response.json()

      if(data){
        setGetData(data)
      }

    }catch(e){
        setGetErrors(e.message())
      setLoading(false)

    }
  }

  useEffect(()=>{

    if(input !== ""){
      fetchData(input)
      setLoading(false)
    }

  },[input])

  if(getErrors){
    return <h1>{getErrors}</h1>
  }

  if(loading){
    return <h1>Data Loading ! Please Wait...</h1>
  }
  


  return (
    <div className="GithubProfileFinder">
      <h1>Github Profile Finder App</h1>
      <div className="searchBar">
        <input type="text" placeholder="Enter Profile Name..." onChange={(e)=>setInput(e.target.value)} />
        <button>Search</button>
      </div>

      {
        getData? <UserProfil user={getData}/> :null
      }
      
    </div>
  );
}

export default GithubProfileFinder;
