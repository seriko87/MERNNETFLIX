import { Visibility } from '@material-ui/icons';
import './widgetSm.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const WidgetSm = () => {
  const [newUsers, setNewUsers] = useState([]);
  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get('/users?new=true', {
          headers: {
            token: `Bearer ${
              JSON.parse(localStorage.getItem('user')).accessToken
            }`,
          },
        });
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getNewUsers();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user) => (
          <li className="widgetSmListItem">
            <img
              src={
                user.profilePic ||
                'https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg'
              }
              alt={user.username}
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSm;
