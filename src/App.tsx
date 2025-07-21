import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import { useFetch } from "./hooks/useFetch";

const URL_WORD = new URL("https://random-word-api.herokuapp.com/word?length=5");

const App = () => {
  const {
    data: word,
    loading: wordIsLoading,
    error,
  } = useFetch<string>(URL_WORD);

  const [words, setWords] = useState<string[]>(new Array(6).fill(null));

  return (
    <div>
      <Board words={words} />
    </div>
  );
};

export default App;
