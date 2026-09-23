export const site = {
  name: 'Itaja',
  description: 'A simple storefront app for Nigerian Instagram and TikTok fashion vendors.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://itaja.ng',
  email: 'hello@itaja.ng',
};

export const pricing = [
  {
    name: 'Free',
    price: '₦0',
    suffix: 'forever',
    description: 'Start selling with one clean link.',
    features: ['Up to 10 products', 'Public storefront', 'WhatsApp ordering', 'Basic product management'],
  },
  {
    name: 'Starter',
    price: '₦2,000',
    suffix: '/ month',
    description: 'For active vendors managing more stock.',
    features: ['Unlimited products', 'Stock auto-tracking', 'Simple restock flow', 'Everything in Free'],
    featured: true,
  },
  {
    name: 'Pro',
    price: '₦5,000',
    suffix: '/ month',
    description: 'Add payments and a clearer order trail.',
    features: ['Everything in Starter', 'Paystack checkout', 'Order history', 'Priority support'],
  },
];
