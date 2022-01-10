import './newList.css';
import { useContext, useState, useEffect } from 'react';
import { getMovies } from '../../context/movieContext/apiCalls';

import { useNavigate } from 'react-router';
import { ListContext } from '../../context/listContext/ListContext';
import { MovieContext } from '../../context/movieContext/MovieContext';
import { createList } from '../../context/listContext/apiCalls';

export default function NewList() {
  const [list, setList] = useState(null);
  const { dispatch } = useContext(ListContext);
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext);
  const [isSeries, setIsSeries] = useState(false);

  useEffect(() => {
    getMovies(dispatchMovie);
  }, [dispatchMovie]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };

  useEffect(() => {
    if (list) {
      if (list['type'] === 'series') {
        setIsSeries(true);
      } else {
        setIsSeries(false);
      }
    }
    console.log('i am called');
  }, [list]);

  const handleCreate = (e) => {
    e.preventDefault();
    createList(list, dispatch);
    navigate('/lists');
  };
  const handleSelect = (e) => {
    let value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    ).sort(() => 0.5 - Math.random());

    setList({ ...list, [e.target.name]: value });
  };
  console.log(list);
  return (
    <div className="newList">
      <h1 className="addListTitle">New List</h1>
      <form className="newForm">
        <div className="addListForm">
          <div>
            <div className="addListItem">
              <label>Title</label>
              <input
                type="text"
                placeholder="Title"
                name="title"
                onChange={handleChange}
              />
            </div>
            <div className="addListItem">
              <label>Genre</label>
              <input
                type="text"
                placeholder="Genre"
                name="genre"
                onChange={handleChange}
              />
            </div>
            <div className="addListItem">
              <label>Type</label>
              <select name="type" onChange={handleChange}>
                <option value="movie">Movie</option>
                <option value="series">Series</option>
              </select>
            </div>
          </div>

          <div className="addListItem">
            <label>Movies</label>
            <select
              multiple
              name="content"
              onChange={handleSelect}
              style={{ height: '500px' }}
            >
              {!isSeries
                ? movies.map((movie) => {
                    if (!movie.isSeries) {
                      return (
                        <option key={movie._id} value={movie._id}>
                          {movie.title}
                        </option>
                      );
                    }
                  })
                : movies.map((movie) => {
                    if (movie.isSeries) {
                      return (
                        <option key={movie._id} value={movie._id}>
                          {movie.title}
                        </option>
                      );
                    }
                  })}
            </select>
          </div>
        </div>

        <button className="addListButton" onClick={handleCreate}>
          Create
        </button>
      </form>
    </div>
  );
}
