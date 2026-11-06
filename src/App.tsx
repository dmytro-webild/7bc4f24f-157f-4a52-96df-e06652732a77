import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import WirPage from './pages/WirPage';
import BikesPage from './pages/BikesPage';
import WerkstattPage from './pages/WerkstattPage';
import LeasingPage from './pages/LeasingPage';
import ShopPage from './pages/ShopPage';
import KontaktPage from './pages/KontaktPage';
import TeamPage from './pages/TeamPage';
import StorePage from './pages/StorePage';
import BikestationPage from './pages/BikestationPage';
import LegalPage from './pages/LegalPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/wir" element={<WirPage />} />
        <Route path="/bikes" element={<BikesPage />} />
        <Route path="/bikes/:category" element={<BikesPage />} />
        <Route path="/werkstatt" element={<WerkstattPage />} />
        <Route path="/leasing" element={<LeasingPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/kontakt" element={<KontaktPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/bikestation" element={<BikestationPage />} />
        <Route path="/legal" element={<LegalPage />} />
      </Route>
    </Routes>
  );
}
