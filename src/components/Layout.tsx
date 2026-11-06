import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  return (
    <StyleProvider buttonVariant="stagger">
      <div className="min-h-screen flex flex-col bg-white text-zinc-900 font-sans">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </StyleProvider>
  );
}
