import React, { useState } from "react";
import "./styles.css";
var color = "white";
const emojiDictionary = {
  "🤣": "Laugh",
  "🤕": "Suffered",
  "😔": "Sad",
  "😲": "Astonished ",
  "😠": "Angry",
  "🥳": "Partying",
  "😇": "Blessed",
  "💖": "Love",
  "🤗": "Hugging",
  "😶": "Speechless",
  "🙄": "It's you",
  "😎": "Cool"
};
var emojiesExisted = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInsertHandler(action) {
    var userInput = action.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Sorry, that does'nt exist in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1 style={{ color: color }}>Emoji Explicator </h1>

      <input onChange={emojiInsertHandler}></input>
      <h2> {meaning}</h2>
      <h3>Emojies we know</h3>
      {emojiesExisted.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: " 1.5rem", margin: "2.5rem 2.5rem" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
