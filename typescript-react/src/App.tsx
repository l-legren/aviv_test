import Listings from '@containers/Listings/Listings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PricesHistory from './containers/PricesHistory/PricesHistory';
import { Header } from './components';

const App = () => (
  <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Listings />} />
        <Route path="/:listingId/prices" element={<PricesHistory />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
