import "./index.css";
import { useEffect, useState } from "react";
import UserProfil from "./UserProfil";

function GithubProfileFinder() {
  const [input, setInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("wilfried-237");
  const [getData, setGetData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [getErrors, setGetErrors] = useState(null);

  async function fetchData(getInput) {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${getInput}`);

      const data = await response.json();

      if (data) {
        setGetData(data);
      }
    } catch (e) {
      setGetErrors(e.message());
      setLoading(false);
    }
  }

  useEffect(() => {
    if (searchTerm !== "") {
      fetchData(searchTerm);
      setLoading(false);
    }
  }, [searchTerm]);

  if (getErrors) {
    return <h1>{getErrors}</h1>;
  }

  if (loading) {
    return <h1>Data Loading ! Please Wait...</h1>;
  }

  return (
    <div className="GithubProfileFinder">
      <h1>Github Profile Finder</h1>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Enter Profile Name..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => input != "" && setSearchTerm(input)}>Search</button>
      </div>

      {getData && getData.message !== "Not Found" ? <UserProfil user={getData} /> : <div className="profileView">No Result Found...</div>}
    </div>
  );
}

export default GithubProfileFinder;
