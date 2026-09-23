import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer client-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="brand" style={{color:'var(--cream)'}}><span className="brand-dot" style={{background:'var(--cream)'}}/>itaja</Link>
            <p>A lightweight storefront and seller marketplace built for Nigerian Instagram and TikTok fashion vendors.</p>
            <span className="footer-market-note">Storefront · Seller tools · WhatsApp · Paystack · Human support</span>
          </div>
          <div className="footer-col"><strong>Product</strong><Link href="/#demo">Live demo</Link><Link href="/#marketplace">Marketplace</Link><Link href="/features">Features</Link><Link href="/pricing">Pricing</Link></div>
          <div className="footer-col"><strong>Company</strong><Link href="/about">About</Link><Link href="/faq">FAQ</Link><Link href="/#join">Early access</Link><a href="mailto:hello@itaja.ng">hello@itaja.ng</a></div>
          <div className="footer-col"><strong>Legal</strong><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Itaja. All rights reserved.</span><span>Designed for small Nigerian social sellers.</span></div>
      </div>
    </footer>
  );
}
