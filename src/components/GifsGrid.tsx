type PropsType = {
  gifs: string[];
};

export const GifsGrid: React.FC<PropsType> = ({ gifs }) => {
  return (
    <div className="gif-grid">
      {gifs.map((gif) => (
        <div className="gif-item" key={gif}>
          <img src={gif} alt={gif} />
        </div>
      ))}
    </div>
  );
};
