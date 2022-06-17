import "../App.css";
import React,{ useContext } from "react";
import {GameStateContext }from"../App";

function Menu() {
  const {  setGameState, setUserName } = useContext( GameStateContext );
  return (
    <div className="Menu">
      <label>Enter Your Name:</label>
      <input
        type="text"
        placeholder="Ex. John Smith"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setGameState("playing");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default Menu;