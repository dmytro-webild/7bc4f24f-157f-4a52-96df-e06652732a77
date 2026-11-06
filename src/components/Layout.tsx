import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  return (
    <StyleProvider buttonVariant="stagger">
      <div className="min-h-screen flex flex-col bg-topo text-[#0a1324]">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </StyleProvider>
  );
}
