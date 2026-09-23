'use client';

import { useEffect, useMemo, useState, type ReactNode } from 'react';

type LayerKey = 'layer1' | 'layer2' | 'layer3' | 'layer4';
type Frame = { title: string; copy: string; screen: ReactNode };
type Layer = { label: string; subtitle: string; summary: string; frames: Frame[] };

const products = [
  ['Vintage Brown Jacket','₦18,500','1 left','tile-1'],
  ['Black Cargo Pants','₦14,000','3 left','tile-2'],
  ['Linen Co-ord','₦21,500','2 left','tile-3'],
  ['Soft Knit Top','₦9,500','1 left','tile-4'],
] as const;

function Storefront() {
  return <div className="demo-screen-body">
    <div className="app-toprow"><span>‹ Itaja</span><span>@closetbyada</span></div>
    <div className="app-profile compact"><div className="app-avatar">CA</div><h3>Closet by Ada</h3><p>Lagos · Thrift & vintage</p><small>Vintage finds, clean edits, ready-to-wear pieces.</small></div>
    <div className="app-section-row"><strong>NEW IN</strong><span>4 pieces</span></div>
    <div className="app-product-grid">{products.map(([name,price,stock,tone])=><div className="app-product-card" key={name}><div className={`app-product-image ${tone}`}><b>{stock}</b></div><strong>{name}</strong><span>{price}</span></div>)}</div>
  </div>;
}

function Product() {
  return <div className="demo-screen-body buyer-detail-screen"><div className="detail-image tile-1"/><h4 className="screen-title">Vintage Brown Jacket</h4><p className="detail-price">₦18,500</p><div className="detail-pills"><span>Size M</span><span>1 in stock</span></div><p className="detail-copy">Structured vintage jacket in warm brown tones. Easy everyday layering piece.</p><div className="buyer-actions"><button className="action-full">Order on WhatsApp</button><button className="ghost-line">Pay now with Paystack</button></div></div>;
}

function Dashboard() {
  return <div className="demo-screen-body"><h4 className="screen-title">Good afternoon, Ada.</h4><p className="screen-sub">Your shop is <em>● Live</em></p><button className="action-full">+ Add product</button><div className="stats-grid"><div><strong>43</strong><span>Products</span></div><div><strong>7</strong><span>Orders</span></div><div><strong>₦143k</strong><span>Tracked sales</span></div></div><div className="live-store-card"><small>YOUR LIVE STOREFRONT</small><strong>Closet by Ada</strong><span>itaja.ng/closetbyada →</span></div><div className="mini-list"><h5>Recent orders</h5><div className="mini-list-item"><strong>Vintage Brown Jacket</strong><span>₦18,500 · confirmed</span></div><div className="mini-list-item"><strong>Linen Co-ord</strong><span>₦21,500 · paid</span></div></div></div>;
}

function Products() {
  return <div className="demo-screen-body"><button className="action-full">+ Add product</button><div className="products-list">{products.slice(0,3).map(([name,price,stock,tone])=><div className="product-list-item" key={name}><span className={`list-thumb ${tone}`}/><div><strong>{name}</strong><span>{price}</span><small>{stock}</small></div><b>›</b></div>)}</div></div>;
}

function Orders() {
  return <div className="demo-screen-body"><div className="orders-stack">{[['Vintage Brown Jacket','ITJ-4821 · WhatsApp','₦18,500','CONFIRMED'],['Linen Co-ord','ITJ-4822 · Paystack','₦21,500','PAID'],['Black Cargo Pants','ITJ-4823 · WhatsApp','₦14,000','PENDING']].map(([name,meta,amount,status])=><div className="order-card" key={meta}><div className="order-top"><strong>{name}</strong><b>{amount}</b></div><span>{meta}</span><small>{status}</small></div>)}</div></div>;
}

function Platform() {
  return <div className="demo-screen-body"><div className="platform-head"><div><small>PLATFORM ADMIN</small><h4 className="screen-title">All vendors</h4></div><span className="platform-pill">Multi-tenant</span></div><div className="platform-metrics"><div><strong>128</strong><span>Vendor accounts</span></div><div><strong>3.8k</strong><span>Stored images</span></div><div><strong>₦486k</strong><span>Subscriptions</span></div></div><div className="vendor-stack">{[['Closet by Ada','closetbyada','Starter'],['Gabriel Clothing','gabriel','Free'],['Thrift Lagos','thriftlagos','Pro']].map(([name,slug,plan])=><div className="vendor-row" key={slug}><div><strong>{name}</strong><span>itaja.ng/{slug}</span></div><div className="vendor-row-end"><b>{plan}</b><small>Live</small></div></div>)}</div></div>;
}

function Services() {
  return <div className="demo-screen-body"><div className="platform-head"><div><small>BACKEND SERVICES</small><h4 className="screen-title">Platform status</h4></div></div><div className="service-stack">{[['A','Vendor accounts','Isolated store data and authentication'],['S','Image storage','Product photos stored per vendor'],['P','Paystack billing','Monthly subscription automation'],['U','Store slugs','Unique vendor URLs and routing']].map(([icon,title,copy])=><div className="backend-card" key={title}><span className="backend-icon">{icon}</span><div><strong>{title}</strong><small>{copy}</small></div><b>Active</b></div>)}</div></div>;
}

function ServiceChat() {
  return <div className="demo-screen-body"><div className="whatsapp-head"><div className="service-avatar">I</div><div><strong>Itaja support</strong><span>Online</span></div></div><div className="chat-flow"><div className="chat-bubble vendor">Hi, I have 8 new pieces to add today.</div><div className="chat-bubble itaja">Perfect. Send the photos, names, prices and sizes here.</div><div className="chat-bubble vendor">Sending them now 🙌</div><div className="photo-strip"><span className="tile-1"/><span className="tile-2"/><span className="tile-3"/></div></div></div>;
}

function ServiceUpdate() {
  return <div className="demo-screen-body"><div className="service-progress-card"><small>DONE-FOR-YOU SERVICE</small><h4 className="screen-title">Updating Closet by Ada</h4>{[['1','Photos received','8 product images'],['2','Products added','Names, prices and sizes entered'],['3','Storefront update','Publishing latest inventory']].map(([n,title,copy],i)=><div className={`progress-item ${i<2?'done':'active'}`} key={n}><span>{n}</span><div><strong>{title}</strong><small>{copy}</small></div></div>)}<div className="service-complete">Store update in progress</div></div></div>;
}

const layers: Record<LayerKey,Layer> = {
  layer1:{label:'Layer 1',subtitle:'Storefront · buyer-facing',summary:'A public storefront gives every seller one current place for products, price, size, stock and ordering.',frames:[{title:'The buyer opens the storefront.',copy:'Current products replace the need to search old social posts.',screen:<Storefront/>},{title:'The buyer opens a product.',copy:'Price, size and availability are visible before the conversation starts.',screen:<Product/>}]},
  layer2:{label:'Layer 2',subtitle:'Vendor panel · seller-facing',summary:'Sellers manage products, inventory and orders from a lightweight phone-first workspace.',frames:[{title:'The seller sees the dashboard.',copy:'Live status, products, orders and the storefront link stay together.',screen:<Dashboard/>},{title:'The seller manages stock.',copy:'Add products and keep quantities current.',screen:<Products/>},{title:'The seller reviews orders.',copy:'WhatsApp and Paystack activity stays organised.',screen:<Orders/>}]},
  layer3:{label:'Layer 3',subtitle:'Platform · backend, multi-tenant',summary:'Itaja isolates vendor data and runs shared accounts, store URLs, image storage and subscription billing.',frames:[{title:'Itaja sees the platform.',copy:'Vendor accounts and plans can be managed centrally without mixing store data.',screen:<Platform/>},{title:'Shared services run underneath.',copy:'Storage, billing and routing power every storefront.',screen:<Services/>}]},
  layer4:{label:'Layer 4',subtitle:'Service layer · human, not code',summary:'Vendors who do not want to self-serve can hand the work to the Itaja team.',frames:[{title:'The vendor sends the products.',copy:'Photos, names, prices and sizes arrive through WhatsApp.',screen:<ServiceChat/>},{title:'A human updates the store.',copy:'The Itaja team enters the products and publishes the latest stock.',screen:<ServiceUpdate/>}]},
};

export default function LiveDemoSection(){
  const [layer,setLayer]=useState<LayerKey>('layer1');
  const [frame,setFrame]=useState(0);
  const current=layers[layer];
  useEffect(()=>setFrame(0),[layer]);
  useEffect(()=>{const t=setInterval(()=>setFrame(v=>(v+1)%current.frames.length),4300);return()=>clearInterval(t)},[current]);
  const progress=useMemo(()=>current.frames.map((_,i)=>i===frame?'active':i<frame?'done':''),[current,frame]);
  return <div className="architecture-demo"><div className="architecture-copy"><span className="eyebrow">Live product architecture</span><h2>See the four Itaja layers working together.</h2><p>{current.summary}</p><div className="architecture-tabs">{(Object.keys(layers) as LayerKey[]).map(k=><button className={layer===k?'active':''} key={k} onClick={()=>setLayer(k)}><span>{layers[k].label}</span><small>{layers[k].subtitle}</small></button>)}</div><div className="architecture-summary"><small>{current.subtitle}</small><strong>{current.frames[frame].title}</strong><p>{current.frames[frame].copy}</p></div><div className="architecture-step-dots">{current.frames.map((x,i)=><button aria-label={x.title} className={i===frame?'active':''} key={i} onClick={()=>setFrame(i)}/>)}</div></div><div className="architecture-stage"><div className="iphone17pm-shell demo-iphone17"><div className="iphone17-buttons left-one"/><div className="iphone17-buttons left-two"/><div className="iphone17-buttons right-one"/><div className="dynamic-island"><span className="camera-dot"/></div><div className="screen-record-ui"><div className="record-label"><i/> LIVE DEMO</div><div className="record-progress">{progress.map((x,i)=><span className={x} key={i}/>)}</div></div><div className="iphone17-screen" key={`${layer}-${frame}`}>{current.frames[frame].screen}</div><div className="home-indicator"/></div></div></div>;
}
