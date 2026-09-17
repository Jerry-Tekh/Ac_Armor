import { useLenis } from './hooks/useLenis';
import SiteNavigation from './components/Navigation/SiteNavigation';
import Hero from './components/Hero/Hero';
import TrustBand from './components/TrustBand/TrustBand';
import ProductCatalog from './components/Products/ProductCatalog';
import QuoteBridge from './components/Quote/QuoteBridge';
import SiteFooter from './components/Footer/SiteFooter';

export default function App() {
  useLenis();

  return (
    <>
      <a className="visuallyHidden" href="#products">
        Skip to products
      </a>

      <SiteNavigation />

      <main data-purpose="main-content">
        <Hero />
        <TrustBand />
        <ProductCatalog />
        <QuoteBridge />
      </main>

      <SiteFooter />
    </>
  );
}
