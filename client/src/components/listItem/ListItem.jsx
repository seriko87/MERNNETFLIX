import {
  Add,
  FiberManualRecord,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from '@material-ui/icons';
import './listItem.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListItem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get('/movies/find/' + item, {
          headers: {
            token: `Bearer ${
              JSON.parse(localStorage.getItem('user')).accessToken
            }`,
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  return (
    <Link to="watch" state={{ movie: movie }}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 290 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie?.imgSm} alt="" />

        {isHovered && (
          <>
            <video
              autoPlay={true}
              progress
              controls={false}
              src={movie.trailer}
              type="video/mp4"
            />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon-play" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownAltOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span className="matchStatus">New</span>
                <span className="limit">{movie.ageRating}</span>
                {movie.isSeries ? (
                  <span>{movie.totalSeason} Season</span>
                ) : (
                  <span>{movie.duration}m</span>
                )}
                <span className="limit-hd">{movie.isHD ? 'HD' : ''}</span>
              </div>
              {movie.genre && (
                <div className="desc">
                  <span>{movie?.genre.split(' ')[0]}</span>
                  <FiberManualRecord className="dot" />
                  <span>{movie?.genre.split(' ')[1]}</span>
                  <FiberManualRecord className="dot" />
                  <span>{movie?.genre.split(' ')[2]}</span>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default ListItem;
