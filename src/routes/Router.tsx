import { Routes, Route } from 'react-router-dom';

// View Components
import Main from 'components/views/Main';
import Admin from 'components/views/Admin';

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default Router;
