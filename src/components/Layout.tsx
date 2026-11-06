import FooterSimpleCard from '@/components/sections/footer/FooterSimpleCard';
import NavbarFloatingLogo from '@/components/ui/NavbarFloatingLogo';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Home",
    "href": "/"
  },
  {
    "name": "Über uns",
    "href": "#about"
  },
  {
    "name": "Service",
    "href": "/service"
  },
  {
    "name": "Kontakt",
    "href": "#contact"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Product Highlights",
    "href": "#product-highlights"
  },
  {
    "name": "Pricing",
    "href": "#pricing"
  }
];

  return (
    <StyleProvider buttonVariant="stagger" siteBackground="floatingGradient" heroBackground="lightRaysCenter">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloatingLogo
      logo="Radsport Derjung"
      logoImageSrc="https://picsum.photos/seed/logoimagesrc/800/600"
      ctaButton={{
        text: "Werkstatt-Termin",
        href: "/contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimpleCard
      brand="Radsport Derjung"
      columns={[
        {
          title: "Service",
          items: [
            {
              label: "Werkstatt",
              href: "/service",
            },
            {
              label: "Beratung",
              href: "/contact",
            },
          ],
        },
        {
          title: "Shop",
          items: [
            {
              label: "Rennräder",
              href: "/products",
            },
            {
              label: "MTB",
              href: "/products",
            },
          ],
        },
      ]}
      copyright="© 2024 Radsport Derjung. Alle Rechte vorbehalten."
      links={[
        {
          label: "Datenschutz",
          href: "/legal",
        },
        {
          label: "Impressum",
          href: "/legal",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
