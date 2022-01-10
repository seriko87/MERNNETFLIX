import { ArrowBackOutlined } from '@material-ui/icons';
import './watch.scss';

import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const Watch = () => {
  const location = useLocation();
  const movie = location.state.movie;

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>

      <video
        className="video"
        autoPlay={true}
        progress
        controls
        src={movie.video}
        type="video/mp4"
      />
    </div>
  );
};

export default Watch;
