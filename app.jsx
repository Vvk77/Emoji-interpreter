
import React, {useState} from "react";
import "./styles.css";

var  SymbolDictionary ={
  "⚠️": "Warning",
  "⛔": "No Entry",
  "🚸": " Children Crossing",
  "🚫": "Prohibited",
  "🚳": " No Bicycles",
  "🚭": "No Smoking",
  "🚱": " Non-Potable Water",
  "🔞 ": "No One Under Eighteen",
  "🚯": "No Littering",
  "☢️": "Radioactive",

};




var headingText = "  Symbol Emoji Interpreter !";
var emojisweknow = Object.keys(SymbolDictionary);



export default function App() {

var [meaning, setMeaning]=useState("");

  function emojiInputHandler(event){
    var userinput = event.target.value;
    var meaning = SymbolDictionary[userinput];


    setMeaning(meaning);
}
  function emojiClickHandler(emoji){
    var meaning = SymbolDictionary[emoji];
    setMeaning(meaning);





  }

  return (
    <div className="App">
      <h1>{headingText}</h1>
      <input onChange={emojiInputHandler}></input>
    <h2> {meaning} </h2>

<h3> emojis we know </h3>
{
  
  emojisweknow.map(function(emoji) {
  return ( 
  <span onClick={() => emojiClickHandler(emoji)}
  style={{fontSize:"2rem",padding:"1.5rem", cursor:"pointer"}}>{emoji}</span>);








})}





    </div>
  );
  }
