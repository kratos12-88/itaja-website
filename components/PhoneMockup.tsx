const products = [
  ['Vintage Brown Jacket', '₦18,500', '1 left', 'tile-1'],
  ['Black Cargo Pants', '₦14,000', '3 left', 'tile-2'],
  ['Linen Co-ord', '₦21,500', '2 left', 'tile-3'],
  ['Soft Knit Top', '₦9,500', '1 left', 'tile-4'],
] as const;

export default function PhoneMockup() {
  return (
    <div className="hero-device-scene" aria-label="Floating iPhone mockup showing the Itaja storefront UI">
      <div className="hero-device-glow" />
      <div className="hero-phone-caption"><span>Live storefront</span><strong>The actual Itaja buyer experience.</strong></div>
      <div className="iphone17pm-shell hero-iphone17 slanted spin-in-phone">
        <div className="iphone17-buttons left-one" /><div className="iphone17-buttons left-two" /><div className="iphone17-buttons right-one" />
        <div className="dynamic-island"><span className="camera-dot" /></div>
        <div className="iphone17-screen hero-screen-reveal">
          <div className="ios-status"><span>9:41</span><span className="status-icons">● ᯤ ▰</span></div>
          <div className="app-toprow"><span>‹ Itaja</span><span>@closetbyada</span></div>
          <div className="app-profile">
            <div className="app-avatar">CA</div><h3>Closet by Ada</h3><p>Lagos · Thrift & vintage</p><small>Vintage finds, clean edits, ready-to-wear pieces.</small>
          </div>
          <div className="app-section-row"><strong>NEW IN</strong><span>4 pieces</span></div>
          <div className="app-product-grid">
            {products.map(([name, price, stock, tone]) => (
              <div key={name} className="app-product-card"><div className={`app-product-image ${tone}`}><b>{stock}</b></div><strong>{name}</strong><span>{price}</span></div>
            ))}
          </div>
        </div>
        <div className="home-indicator" />
      </div>
    </div>
  );
}
