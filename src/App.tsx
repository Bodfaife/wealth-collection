import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { CartProvider } from "./store";
import FeaturedDesigns from "./components/FeaturedDesigns";
import BrandStory from "./components/BrandStory";
import CategoryShowcase from "./components/CategoryShowcase";
import EditorialSection from "./components/EditorialSection";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import Product from "./components/Product";
import Cart from "./components/Cart";
import About from "./components/About";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import { ShippingReturns, Privacy, Terms } from "./components/Policy";
import NotFound from "./components/NotFound";

function Home() {
  return (
    <>
    <HeroSection />
    <FeaturedDesigns />
    <BrandStory />
    <CategoryShowcase />
    <EditorialSection />
    <Testimonials />
    <Newsletter />
    </>
  );
}

function RoutedPage() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";

  if (path === "/") {
    return <Home />;
  }

  if (path === "/Shop") {
    return <Shop />;
  }

  if (path.startsWith("/product/")) {
    const id = path.split("/")[2];

    if (id) {
      return <Product id={id} />;
    }

    return <NotFound />;
  }

  if (path === "/cart") {
    return <Cart />;
  }

  if (path === "/About") {
    return <About />;
  }

  if (path === "/Contact") {
    return <Contact />;
  }

  if (path === "/faq") {
    return <FAQ />;
  }

  if (path === "/shipping") {
    return <ShippingReturns />;
  }

  if (path === "/privacy") {
    return <Privacy />;
  }

  if (path === "/terms") {
    return <Terms />;
  }

  return <NotFound />;
}

export default function App() {
  return (
    <CartProvider>
    <main className="min-h-screen bg-[#F5F1E8] text-[#171717]">
    <Navbar />

    <RoutedPage />

    <Footer />
    </main>
    </CartProvider>
  );
}
