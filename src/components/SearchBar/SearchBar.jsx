import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import './SearchBar.css'
import { useNavigate } from "react-router-dom";


const SearchBar = () => {
  const [input, setInput] = useState("");
  const [result, setResults] = useState("");
const navigate = useNavigate()
  const fetchData = () => {
    fetch("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => response.json())
      .then((json) => {
        const filteredResults = json.filter(
          (item) =>
            item.capital[0]?.toLowerCase().includes(input.toLowerCase())
        );
        setResults(filteredResults);
      });
  };

  useEffect(() => {
    if (input.length >= 3) {
      fetchData();
    }
  }, [input]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Additional actions on form submit if needed
  };
  const handleResultClick = (res) => {
    // setInput(res.capital);
    // setResults(""); // Clear the selected result
    navigate(`/cities/${res.capital[0]}/restaurants`)
  };
  return (
    <div className="input-wrapper">
      <form className="form-style" onSubmit={handleSubmit}>
        <input
          style={{ width: "500px" }}
          placeholder="Type to search..."
          type="text"
          value={input}
          onChange={handleInput}
        />
        <button className="button-style" style={{ width: '5%' }} type="submit">
          <FaSearch id="search-icon" />
        </button>
      </form>

      <div className="results-list">
        {!!result.length &&
          result.map((result) => (
           <div 
              onClick={() => handleResultClick(result)}

              className="search-result"
              key={result.area}
            >
              {result.capital[0]}
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchBar;



















// / import { useEffect, useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import SearchResult from "./../SearchResult/SearchResult"
// import "./SearchBar.css";

// const SearchBar = ({ results, setResults }) => {
//   const [input, setInput] = useState("");

//   const fetchData = () => {
//     fetch("https://ih-countries-api.herokuapp.com/countries")
//       .then((response) => response.json())
//       .then((json) => {
//         console.log(json)
//         const results = json.filter(item => item.capital[0]?.toLowerCase().includes(input.toLowerCase()))
//         // console.log(data.capital)
//         console.log(results)
//         setResults(results);
//       });

//   };

//   useEffect(() => {
//     if (
//       input.length >= 3
//     ) { fetchData(); }
//   }, [input])

//   const handleInput = (e) => {
//     setInput(e.target.value);
//   };
  
    
  

//   const handleSubmit = (e) => {
//     // Prevent page reload on form submit
//     e.preventDefault();
//     // Do something with the search query string ...
//     console.log("Search input: ", input);
//     if (!input) {
//       onSearch(foodsJson)
//       return
//     }
//     onSearch(prev =>
//       prev.filter(item =>
//         item.name.toLowerCase().includes(input.toLowerCase()))

//     )
//   };


//   return (
//     <div className="input-wrapper">
//       <button className='btn' type="submit" style={{ with: '20px' }}> <FaSearch id="search-icon" /></button>
//       <input style={{ width: '500px' }} placeholder="Type to search..." type="text" value={input} onChange={handleInput} />
//       <form className="search-style" onSubmit={handleSubmit}></form>

//       <div className="results-list">
//         {!!results.length && results.map((result) => {
//           if (result != input) return <SearchResult setInput={setInput} result={result.capital[0]} key={result.area} />;

//         })}
//       </div>
//     </div>
//   );

// }
// export default SearchBar
