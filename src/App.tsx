import "./App.css";
import { useFetch } from "./hooks/useFetch";

const URL_WORD = new URL("https://random-word-api.herokuapp.com/word?length=5");

const App = () => {
  const {
    data: word,
    loading: wordIsLoading,
    error,
  } = useFetch<string>(URL_WORD);

  return (
    <>
      {!wordIsLoading ? <div>{word}</div> : <div>Word is Loading</div>}
      {error ? { error } : ""}
    </>
  );
};

export default App;
