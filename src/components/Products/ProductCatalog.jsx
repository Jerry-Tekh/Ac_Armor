import { useGsapReveal } from '../../hooks/useGsapReveal';
import ProductCard from './ProductCard';
import { catalog, products } from '../../data/content';
import styles from './ProductCatalog.module.css';

export default function ProductCatalog() {
  const scope = useGsapReveal({ y: 34, stagger: 0.12, start: 'top 80%' });

  return (
    <section
      className={styles.section}
      data-purpose="preliminary-product-presentation"
      id="products"
      ref={scope}
    >
      <div className={styles.shell}>
        <header className={styles.header}>
          <span className={styles.eyebrow} data-reveal>
            {catalog.eyebrow}
          </span>
          <h2 className={styles.heading} data-reveal>
            {catalog.heading}
          </h2>
          <p className={styles.body} data-reveal>
            {catalog.body}
          </p>
        </header>

        <div className={styles.grid} id="who-we-protect">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
