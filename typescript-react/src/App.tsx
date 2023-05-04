import Listings from '@containers/Listings/Listings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header, PriceHistoryCard } from './components';

const App = () => (
  <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Listings />} />
        <Route path="/:listingId/prices" element={<PriceHistoryCard />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
