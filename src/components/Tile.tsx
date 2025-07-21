interface TileProps {
  letter: string;
}

const Tile = ({ letter }: TileProps) => {
  return (
    <div className="w-14 h-14 border-2 border-gray-600 border-opacity-50 text-5xl text-white leading-none capitalize flex items-center justify-center">
      {letter}
    </div>
  );
};

export default Tile;
