import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Van from './Vans/Vans';
import VanDetails from './Vans/VanDetails';
import Layout from '../components/Layout';
import Host from './Host/HostLayout';
import Dashboard from './Host/Dashboard';
import Income from './Host/Income';
import Reviews from './Host/Reviews';
import Vans from './Host/HostVans';
import HostVanDetails from './Host/Van/HostVanDetails';
import VanPricing from './Host/Van/VanPricing';
import VanPhotos from './Host/Van/VanPhotos';
import CurrentVanDetails from './Host/Van/CurrentVanDetails';

function App() {
  return (
    <BrowserRouter>      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />} />
          <Route path="van" element={<Van />} />
          <Route path="van/:id" element={<VanDetails />} />

          <Route path="/host" element={<Host />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="van" element={<Vans />} />
            <Route path="van/:id" element={<HostVanDetails />}>
              <Route index element={<CurrentVanDetails />} />
              <Route path="pricing" element={<VanPricing />} />
              <Route path="photos" element={<VanPhotos />} />
            </Route>
            <Route path="reviews" element={<Reviews />} />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
