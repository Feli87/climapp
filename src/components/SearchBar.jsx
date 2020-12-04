import React, { useState } from "react";
import './Search.css';
export default function SearchBar({ onSearch }) {
  // acá va tu código
  const [input, setInput] = useState("");
  const onChange = (e) => {  setInput(e.target.value) };
  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
    setInput("");   //vacio el input luego de hacaer submit
  };

  return (
    <section className="searchSection">
      <div className="searchBar">
      <form onSubmit={onSubmit}>
        <input
          className="inp-search"
          id="inputText"
          type="text"
          placeholder="Type here..."
          onChange={onChange}
          value={input}
          />
        <button className="btn-search"  onClick={onSubmit}>Search / Add</button>
        </form>
      </div>
    </section>
  );

  
  
}
