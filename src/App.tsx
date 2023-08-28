import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { CreatePage, OrderPage } from './pages';

export const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/create');
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path='/create'
          element={ <CreatePage/> }
        />

        <Route
          path='/create/order'
          element={ <OrderPage/> }
        />
      </Routes>
    </div>
  );
};
