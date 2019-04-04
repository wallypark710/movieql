let movies = [
  {
    id: 1,
    name: 'HER',
    score: 5,
  },
  {
    id: 2,
    name: 'Avengers',
    score: 5,
  },
  {
    id: 3,
    name: 'Home alone 2',
    score: 4,
  },
  {
    id: 4,
    name: 'E.T',
    score: 3,
  },
];

const getMovie = () => movies;

const getById = id => {
  const target = movies.filter(ele => ele.id === id);
  return target[0];
};

const deleteMovie = id => {
  const newList = movies.filter(ele => ele.id !== id);

  if (movies.length > newList.length) {
    movies = newList;
    return true;
  } else {
    return false;
  }
};

const addMovie = (name, score) => {
  const newMovie = {
    id: movies.length + 1,
    name: name,
    score: score,
  };

  movies.push(newMovie);
  return newMovie;
};

const resolvers = {
  Query: {
    movies: () => movies,
    movie: (_, { id }) => getById(id),
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id),
  },
};

export default resolvers;
