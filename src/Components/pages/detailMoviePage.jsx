import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetail } from "../../service/Detail.service";

const DetailMoviePage = () => {
  const { id } = useParams();

  const [Movies, setMovies] = useState([]);
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    getDetail(id).then((data) => setMovies(data));

    getDetail(id).then((data) => setRatings(data.Ratings));
  }, [id]);

  // console.log(ratings);

  return (
    <div className="w-full mb-5 flex flex-col p-5">
      {Object.keys(Movies).length > 1 && (
        <div className="w-full h-full bg-slate-900 max-w-lg p-5 text-center rounded-lg shadow mx-auto mb-5">
          <h1 className="text-2xl tracking-wider text-white font-bold uppercase mb-1">
            {Movies.Title}
          </h1>
          <div className="flex justify-center gap-2">
            {ratings.map((rating) => (
              // eslint-disable-next-line react/jsx-key
              <p className="text-slate-300 mb-1 text-xs">
                | {rating.Source} : {rating.Value} |
              </p>
            ))}
          </div>

          <img
            src={Movies.Poster}
            alt={Movies.Title}
            className="block mx-auto w-1/2"
          />
          <h3 className="text-slate-100">{Movies.Actors}</h3>
          <h4 className="text-slate-300">{Movies.Released}</h4>
          <p className="text-white">{Movies.Genre}</p>
          <p className="text-slate-400">{Movies.Plot}</p>
        </div>
      )}
      <div className="flex justify-center">
        <button
          onClick={() => window.history.back()}
          className="bg-purple-500 w-fit px-5 py-3 ml-1 text-xs rounded-lg border border-black shadow-lg text-white font-bold hover:bg-purple-300 hover:scale-105 hover:text-black transition"
        >
          Kembali
        </button>
      </div>
    </div>
  );
};

export default DetailMoviePage;
