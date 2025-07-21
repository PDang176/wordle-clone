import Tile from "./Tile";

interface RowProps {
  word: string;
}

const WORD_LENGTH = 5;

const Row = ({ word }: RowProps) => {
  const emptyLetterCount = WORD_LENGTH - word.length;

  return (
    <div className="flex flex-row items-center justify-center gap-1">
      {word.split("").map((letter, i) => (
        <Tile key={i} letter={letter} />
      ))}
      {emptyLetterCount > 0 &&
        new Array(emptyLetterCount)
          .fill(null)
          .map((_, i) => <Tile key={i} letter="" />)}
    </div>
  );
};

export default Row;
