import React from "react";
import SearchBar from "./SearchBar/SearchBar";
// import ItemList from "./ItemList/ItemList";

class Home extends React.Component {
  // SearchPage = () => {
  //   const [input, setInput] = useState("");
  //   const [itemListDefault, setItemListDefault] = useState();
  //   const [itemList, setItemList] = useState();
  // };
  // fetchData = async () => {
  //   return await fetch("https://restcountries.eu/rest/v2/all")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setItemList(data);
  //       setItemListDefault(data);
  //     });
  // };

  // updateInput = async (input) => {
  //   const filtered = countryListDefault.filter((country) => {
  //     return country.name.toLowerCase().includes(input.toLowerCase());
  //   });
  //   setInput(input);
  //   setCountryList(filtered);
  // };

  render() {
    return (
      <div className="Home">
        <br></br>
        <h2> Where food is Art </h2>
        <br></br>
        <SearchBar  />
        <button >Search</button>
    
        {/* <SearchBar input={input} onChange={updateInput} /> */}
        {/* <button >Search</button> */}
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default Home;
