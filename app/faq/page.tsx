const faqs = [
  ['What is Itaja?', 'Itaja is a lightweight storefront product for small Nigerian fashion and thrift vendors who primarily sell through Instagram and TikTok.'],
  ['Who is it for?', 'The first target market is small Instagram and TikTok fashion and thrift vendors in Lagos, especially sellers without an existing storefront tool.'],
  ['What can I put on my store?', 'The planned v1 product model includes product name, price, size, photo and quantity, with live availability shown on the storefront.'],
  ['How do orders work?', 'A buyer can start an order through a pre-filled WhatsApp message. Pro vendors can also offer Paystack checkout.'],
  ['Does stock update automatically?', 'Paid checkout can decrement stock automatically after a confirmed order. WhatsApp orders can be confirmed by the vendor before stock is reduced.'],
  ['Do buyers need to create an account?', 'The product direction is to keep the buyer journey lightweight. The storefront should be browsable without creating a buyer account.'],
  ['Can Itaja manage my store?', 'Yes. A parallel done-for-you service is planned so vendors can send product photos and prices via WhatsApp and have an Itaja team member update the storefront.'],
  ['Is there a free plan?', 'Yes. The planned Free tier includes a storefront link, up to 10 products and WhatsApp ordering.'],
  ['What is not included in v1?', 'Multi-currency support, POS, staff accounts, advanced analytics and international shipping/orders are outside the initial scope.'],
];
export default function FAQ(){return <><section className="page-hero"><div className="container"><span className="eyebrow">FAQ</span><h1>The short version of how Itaja works.</h1><p>Answers based on the current product scope and launch plan.</p></div></section><section className="section section-light"><div className="container"><div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section></>}
