import Home from './pages/home/Home';
import Watch from './pages/watch/Watch';
import Register from './pages/register/Register';
import './app.scss';
import Login from './pages/login/Login';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './authContext/AuthContext';
import { useContext } from 'react';

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />

      {user && (
        <>
          <Route path="movies" element={<Home type={'movie'} />}>
            <Route path="watch" element={<Watch />} />
          </Route>
          <Route path="series" element={<Home type={'series'} />}>
            <Route path="watch" element={<Watch />} />
          </Route>

          <Route path="watch" element={<Watch />} />
        </>
      )}

      <Route
        path="/register"
        element={!user ? <Register /> : <Navigate to="/" />}
      />
      <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
    </Routes>
  );
};

export default App;
