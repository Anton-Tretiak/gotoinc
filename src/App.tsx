import { Routes, Route } from 'react-router-dom';

import { CreatePage, OrderPage } from './pages';

export const App = () => {
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
