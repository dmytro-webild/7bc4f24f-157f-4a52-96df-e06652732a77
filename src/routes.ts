export interface Route {
  path: string;
  label: string;
  pageFile: string;
}

export const routes: Route[] = [
  { path: '/', label: 'Home', pageFile: 'HomePage' },
  { path: '/wir', label: 'Wir', pageFile: 'WirPage' },
  { path: '/bikes', label: 'Bikes', pageFile: 'BikesPage' },
  { path: '/bikes/:category', label: 'Bikes Kategorie', pageFile: 'BikesPage' },
  { path: '/werkstatt', label: 'Werkstatt', pageFile: 'WerkstattPage' },
  { path: '/leasing', label: 'Leasing', pageFile: 'LeasingPage' },
  { path: '/shop', label: 'Shop', pageFile: 'ShopPage' },
  { path: '/kontakt', label: 'Kontakt', pageFile: 'KontaktPage' },
  { path: '/team', label: 'Team Impressionen', pageFile: 'TeamPage' },
  { path: '/store', label: 'Store Impressionen', pageFile: 'StorePage' },
  { path: '/bikestation', label: 'Bikestation Impressionen', pageFile: 'BikestationPage' },
  { path: '/legal', label: 'Impressum & Datenschutz', pageFile: 'LegalPage' },
];
