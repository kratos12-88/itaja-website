import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header pill-header-shell">
      <div className="container nav-pill-wrap">
        <div className="nav-pill client-nav-pill">
          <Link href="/" className="brand" aria-label="Itaja home"><span className="brand-dot" />itaja</Link>
          <nav className="nav-links" aria-label="Primary">
            <Link href="/#demo">Live demo</Link>
            <Link href="/#marketplace">Marketplace</Link>
            <Link href="/#features">Features</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/faq">FAQ</Link>
          </nav>
          <Link href="/#join" className="btn btn-primary nav-cta nav-cta-refined">Join early access</Link>
        </div>
      </div>
    </header>
  );
}
