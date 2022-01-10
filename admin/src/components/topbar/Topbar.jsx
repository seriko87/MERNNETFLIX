import { Language, NotificationsNone, Settings } from '@material-ui/icons';
import './topbar.css';
import { useNavigate } from 'react-router-dom';
import { logoutt } from '../../context/authContext/apiCalls';
import { AuthContext } from '../../context/authContext/AuthContext';
import { useContext } from 'react';

const Topbar = () => {
  let navigate = useNavigate();
  function handleClick() {
    logoutt(dispatch);
    navigate('/login');
  }
  const { dispatch } = useContext(AuthContext);

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin Panel</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>

          <img
            src="https://cdn.vox-cdn.com/thumbor/00awoM5IS2kFITs9546UyMSePBY=/0x0:2370x1574/1200x800/filters:focal(996x598:1374x976)/cdn.vox-cdn.com/uploads/chorus_image/image/69715362/Screen_Shot_2020_07_21_at_9.38.25_AM.0.png"
            alt=""
            className="topAvatar"
          />
          <button onClick={handleClick} className="logoutBtn">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
