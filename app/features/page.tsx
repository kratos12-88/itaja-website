import Link from 'next/link';

const groups = [
  ['Storefront', 'A public store page per vendor showing product photo, name, price, size and stock status.'],
  ['Product management', 'Add, edit, remove and restock products from the vendor experience without technical setup.'],
  ['WhatsApp ordering', 'Send buyers into a pre-filled WhatsApp order message so the conversation starts with the right product context.'],
  ['Paystack checkout', 'Optional checkout for vendors who want instant payment rather than completing every order in chat.'],
  ['Order log', 'Keep a simple vendor-side order history instead of relying entirely on scattered message threads.'],
  ['Managed service', 'A human Itaja operator can maintain a vendor storefront on their behalf for a separate service fee.'],
];

export default function Features(){return <><section className="page-hero"><div className="container"><span className="eyebrow">Features</span><h1>A storefront that stays out of the seller’s way.</h1><p>Itaja is deliberately focused. The goal is not to reproduce a full commerce suite — it is to remove the specific friction that small Instagram and TikTok vendors deal with every day.</p></div></section><section className="section section-light"><div className="container"><div className="features-grid">{groups.map(([h,p],i)=><article className={`feature-card ${i<2?'big':'third'}`} key={h}><span className="feature-tag">{String(i+1).padStart(2,'0')}</span><h3>{h}</h3><p>{p}</p></article>)}</div><div style={{marginTop:40}}><Link href="/#join" className="btn btn-primary">Join early access</Link></div></div></section></>}
