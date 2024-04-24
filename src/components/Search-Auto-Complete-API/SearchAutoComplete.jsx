import { useEffect, useState } from "react";
// import data from './data';
import "./index.css";

export default function SearchAutoComplete() {
  const [searchTerm, setSearchTerm] = useState("");
  const [getData, setGetData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      setIsLoading(true);

      const response = await fetch(`https://dummyjson.com/users?limit=1000`);
      const data = await response.json();
      

      if (data) {
        setGetData(data.users.map((user)=> user.firstName.toLowerCase()));
        setIsLoading(false);
      }
    } catch (e) {
      setIsLoading(false);
      setError(e.message);
    }
  }

  function handleChange(e){
    setSearchTerm(e.target.value.toLowerCase())
    const query = e.target.value.toLowerCase();

    if(query.length > 1){
        setSearchResults(getData.filter((name)=> name.indexOf(query) > -1))
    }else{
        setSearchResults([])
    }
  }

  function handleClick(getCurrentIndex){
    setSearchTerm(searchResults[getCurrentIndex])
    setSearchResults([])
  }

  console.log(getData)
  console.log(searchResults)

  useEffect(() => {
    fetchData();
  }, []);


  if (isLoading) {
    return <div>Loading data please Wait...</div>;
  }

  if (error !== null) {
    return <div>An Error Occured ! {error}</div>;
  }

  return (
    <div className="SearchAutoComplete">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => handleChange(e)}
        placeholder="Enter Search Term..."
      />
      <div>
        <ul className="auto-complete">
          {searchResults.map((name, index) => <li key={index} onClick={()=> handleClick(index)}>{name}</li>)}
        </ul>
      </div>
    </div>
  );
}
