import React from 'react'

const Searchbar = () => {
  const handleKeyPress = (event) => {
    var barra = document.getElementById("searchbar");

    var barravalue = barra.value;

    if (event.key === "Enter") {
      event.preventDefault();

      console.log(barravalue);
      alert(`No hemos encontrado ${barravalue}`);
    }
  };  
  
  return (
      <div>
      <input
        type="text"
        placeholder="¿Que buscas?"
        className="buscador"
        id="searchbar"
        onKeyDown={handleKeyPress}
      />
      </div>
    );
  };

  export default Searchbar