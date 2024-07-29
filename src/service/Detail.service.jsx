export const getDetail = async (id) => {
  try {
    const movie = await fetch(
      `https://www.omdbapi.com/?apikey=eaf4902d&i=${id}`
    );
    const callback = await movie.json();
    return callback;
  } catch (error) {
    console.log(error);
  }
};
