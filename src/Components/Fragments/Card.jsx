const Card = ({ title, year, type, image }) => {
  return (
    <div className="bg-slate-900 w-40 p-4 rounded m-2 shadow-md flex flex-col justify-between">
      <div className="div">
        <img src={image} alt="random" className="w-32" />
        <h2 className="text-white my-1 font-semibold">{title}</h2>
      </div>
      <div className="">
        <p className="text-xs text-slate-400">{year}</p>
        <p className="text-xs text-slate-200 ">{type}</p>
      </div>
    </div>
  );
};

export default Card;
