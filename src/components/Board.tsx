import Row from "./Row";

interface BoardProps {
  words: string[];
}

const Board = ({ words }: BoardProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      {words.map((word, i) => (
        <Row key={i} word={word ?? ""} />
      ))}
    </div>
  );
};

export default Board;
