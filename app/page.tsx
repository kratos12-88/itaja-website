import Link from 'next/link';
import PhoneMockup from '@/components/PhoneMockup';
import WaitlistForm from '@/components/WaitlistForm';
import LiveDemoSection from '@/components/LiveDemoSection';
import StorefrontLinkDemo from '@/components/StorefrontLinkDemo';
import InteractiveOrderFlow from '@/components/InteractiveOrderFlow';
import { pricing } from '@/lib/site';

const marketplaceDetails = [
  ['Buyer storefront','A public store page per vendor with product photos, names, prices, sizes and live stock status, designed to replace repeated “is this available?” DMs.'],
  ['Seller workspace','A phone-first vendor panel for login, product creation, edits, removals, stock tracking, restocking and a simple order log.'],
  ['WhatsApp ordering','One-tap ordering opens a pre-filled WhatsApp message so buyers keep the familiar conversation flow while starting with the right product context.'],
  ['Paystack checkout','Pro vendors can offer direct Paystack checkout, creating a faster purchase path for customers who want to pay immediately.'],
  ['Multi-tenant platform','Each vendor has isolated data, a unique storefront slug, image storage, subscription billing and platform-level administration behind the scenes.'],
  ['Done-for-you service','Vendors who prefer not to self-manage can send product photos and prices through WhatsApp and let the Itaja team maintain the storefront for them.'],
];

const painPoints = [
  ['Old posts stay live','Sold-out products keep generating questions long after they are gone.'],
  ['Prices are buried','Customers have to search old captions or send another DM just to find basic information.'],
  ['Stock is unclear','New followers cannot quickly tell what is currently available.'],
  ['Orders are scattered','Product questions, orders and payment conversations are spread across multiple chats.'],
];

const sellerJourney = [
  ['01','Set up','Sign in and create your storefront.'],
  ['02','Add products','Upload the photo, name, price, size and quantity.'],
  ['03','Share one link','Put your Itaja storefront in your Instagram or TikTok bio.'],
  ['04','Receive orders','Buyers choose WhatsApp or Paystack depending on your plan.'],
  ['05','Keep stock current','Sold items update and vendors can restock when new inventory arrives.'],
];

const architecturePlain = [
  ['Layer 1','Customer storefront','What buyers browse and order from.'],
  ['Layer 2','Seller workspace','Where vendors manage products, stock and orders.'],
  ['Layer 3','Itaja platform','The shared backend powering accounts, slugs, storage and billing.'],
  ['Layer 4','Human service','Itaja can manage a vendor’s storefront on their behalf.'],
];

export default function Home() {
  return (
    <>
      <section className="hero hero-clean">
        <div className="container hero-grid clean-grid">
          <div className="hero-copy-client">
            <span className="eyebrow">Storefronts for social sellers</span>
            <h1>Your shop, always up to date.</h1>
            <p className="lead">Itaja is a lightweight storefront and seller marketplace for Nigerian Instagram and TikTok fashion vendors. It replaces scattered posts and repetitive DMs with one always-current storefront link for products, prices, sizes, stock and ordering.</p>
            <div className="hero-actions"><Link href="#join" className="btn btn-primary">Join early access</Link><Link href="#demo" className="btn btn-secondary">See live demo</Link></div>
          </div>
          <PhoneMockup />
        </div>
      </section>

      <section className="section what-is-itaja" id="about-itaja">
        <div className="container product-definition-grid">
          <div className="section-head"><span className="eyebrow">What is Itaja?</span><h2>One storefront link that stays current while social media keeps doing the discovery.</h2></div>
          <div className="definition-copy"><p>Itaja is built for small fashion and thrift sellers who already attract customers through Instagram and TikTok but still run product discovery and ordering through scattered posts and DMs.</p><p>Instead of replacing those channels, Itaja gives each seller a dedicated storefront and a lightweight seller workspace behind it.</p><StorefrontLinkDemo /></div>
        </div>
      </section>

      <section className="section section-light why-not-social">
        <div className="container">
          <div className="section-head center compact-head"><span className="eyebrow">Why not just Instagram?</span><h2>Social media is good at discovery. It is not a live catalogue.</h2><p>Itaja fixes the specific gaps that appear once customers actually want to buy.</p></div>
          <div className="pain-grid">{painPoints.map(([title,copy],i)=><article className="pain-card" key={title}><span>0{i+1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </div>
      </section>

      <section className="section buyer-seller-section">
        <div className="container buyer-seller-grid">
          <article className="audience-card buyer-card"><span className="eyebrow">For buyers</span><h2>See what is actually available.</h2><p>Browse a seller’s current catalogue, check the price, size and stock before asking a question, then order using the path that suits the store.</p><ul><li>Current products in one place</li><li>Price, size and availability upfront</li><li>WhatsApp ordering</li><li>Optional Paystack checkout</li></ul></article>
          <article className="audience-card seller-card"><span className="eyebrow">For sellers</span><h2>Run the storefront without living in your DMs.</h2><p>Add or edit products, keep quantities current, restock new inventory and keep a simple order trail from a phone-first workspace.</p><ul><li>Add, edit and remove products</li><li>Stock tracking and restock flow</li><li>Simple order history</li><li>One store link for every channel</li></ul></article>
        </div>
      </section>

      <section className="section demo-section smoother-demo" id="demo"><div className="container"><LiveDemoSection /></div></section>

      <section className="section seller-journey-section section-light">
        <div className="container">
          <div className="section-head"><span className="eyebrow">The seller journey</span><h2>From account setup to a current storefront in five clear moves.</h2></div>
          <div className="journey-track">{sellerJourney.map(([num,title,copy])=><article className="journey-step" key={num}><span>{num}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </div>
      </section>

      <section className="section order-flow-section">
        <div className="container order-flow-layout">
          <div className="section-head"><span className="eyebrow">Try the order flow</span><h2>See how a buyer moves from product to order.</h2><p>This sample is interactive. It mirrors the product logic without pretending to process a real payment or open a real WhatsApp conversation.</p></div>
          <InteractiveOrderFlow />
        </div>
      </section>

      <section className="section marketplace-detail-section client-marketplace" id="marketplace">
        <div className="container">
          <div className="section-head marketplace-head"><span className="eyebrow">The Itaja marketplace</span><h2>One focused system for discovering, selling and managing current stock.</h2><p>The buyer sees a simple storefront. The vendor gets a lightweight management panel. Itaja handles the shared platform underneath — and can even manage the storefront manually for vendors who want a human service.</p></div>
          <div className="marketplace-grid">{marketplaceDetails.map(([title,copy], index)=><article className="marketplace-card" key={title}><span className="market-index">0{index+1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </div>
      </section>

      <section className="section architecture-explained section-light">
        <div className="container architecture-explained-grid">
          <div className="section-head"><span className="eyebrow">Four layers, plain English</span><h2>The product is simple on the surface and structured underneath.</h2><p>The live demo above shows the architecture visually. This is what each layer means in practical terms.</p></div>
          <div className="architecture-plain-list">{architecturePlain.map(([layer,title,copy])=><article key={layer}><span>{layer}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
        </div>
      </section>

      <section className="section proof-ready-section">
        <div className="container proof-ready-grid">
          <div><span className="eyebrow">Built to prove with real sellers</span><h2>Early access is about real storefronts, not vanity numbers.</h2><p>Itaja is starting with a small group of real fashion and thrift vendors. As those stores go live, this area is ready to show verified seller stories, live storefronts and real operating metrics without inventing social proof before it exists.</p></div>
          <div className="proof-placeholders"><div><strong>Live stores</strong><span>Added as early-access vendors launch</span></div><div><strong>Seller stories</strong><span>Real quotes and outcomes only</span></div><div><strong>Product activity</strong><span>Verified counts once usage begins</span></div></div>
        </div>
      </section>

      <section className="section managed-service-strip managed-service-strong">
        <div className="container managed-service-inner"><div><span className="eyebrow">Done-for-you option</span><h2>You do not have to manage Itaja yourself.</h2></div><div><p>Send product photos, names, prices and sizes to the Itaja team through WhatsApp. A human operator can update the panel and storefront on your behalf, priced separately by workload.</p><Link href="#join" className="btn btn-secondary">Ask about managed setup</Link></div></div>
      </section>

      <section className="section pricing-simple client-pricing">
        <div className="container">
          <div className="section-head center compact-head"><span className="eyebrow">Simple pricing</span><h2>Start free. Pay when Itaja is doing more for you.</h2><p>Monthly plans keep the commitment light while the storefront grows with the seller.</p></div>
          <div className="pricing-grid">{pricing.map((plan)=><article className={`price-card ${plan.featured?'featured':''}`} key={plan.name}><h3>{plan.name}</h3><div className="price">{plan.price}</div><div className="price-sub">{plan.suffix}</div><p>{plan.description}</p><ul className="price-list">{plan.features.map((feature)=><li key={feature}><span className="tick">✓</span>{feature}</li>)}</ul><Link href="#join" className={`btn ${plan.featured?'':'btn-primary'}`}>Join early access</Link></article>)}</div>
        </div>
      </section>

      <section className="section final-product-summary">
        <div className="container final-summary-card"><span className="eyebrow">Itaja in one sentence</span><h2>One storefront for buyers. One mobile workspace for sellers. One platform behind every store. Human help when you do not want to manage it yourself.</h2><Link href="#join" className="btn btn-primary">Join Itaja early access</Link></div>
      </section>

      <section className="cta client-cta" id="join"><div className="container"><div className="cta-box"><span className="eyebrow" style={{color:'var(--cream)'}}>Early access</span><h2>Make your bio link work harder.</h2><p>Join Itaja early access. We are starting with small Nigerian fashion and thrift vendors and learning directly from the way they already sell.</p><WaitlistForm/></div></div></section>
    </>
  );
}
