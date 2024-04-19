import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        // console.log(data.capital)
        onSearch(prev => 
          prev.filter(item => 
           item.name.toLowerCase().includes(searchQuery.toLowerCase()) )
          
           
            
            
          );
        });
        setResults(results);
      };
  

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}
export default SearchBar

// )
// };

// return (
// <form className="search-style" onSubmit={handleSubmit}>
//  <input style={{width:'500px'} } type="text" value={searchQuery} onChange={handleInput} />
 
//  <button type="submit">Search</button>
// </form>
// )
// }


























// import { useState } from "react";

// const API_URL = 'https://restaurant-beckend.adaptable.app'


// function SearchBar({onSearch}) {
//   // Create a state variable to store the string from the input 
//   const [searchQuery, setSearchQuery] = useState('');

//   // Function to handle the form input change
//   const handleInput = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   // Function to handle the form submission
//   const handleSubmit = (e) => {
//     // Prevent page reload on form submit
//     e.preventDefault();
//     // Do something with the search query string ...
//     console.log("Search query: ", searchQuery); 
//     if (!searchQuery){
//       onSearch(API_URL)
//       return
//     }
//     onSearch(prev => 
//        prev.filter(item => 
//         item.name.toLowerCase().includes(searchQuery.toLowerCase()) )
      
//     )
//   };

//   return (
//     <form className="search-style" onSubmit={handleSubmit}>
//       <input style={{width:'500px'} } type="text" value={searchQuery} onChange={handleInput} />
      
//       <button type="submit">Search</button>
//     </form>
//   )
// }

// export default SearchBar;