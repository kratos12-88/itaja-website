import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'Itaja — Your shop, always up to date', template: '%s · Itaja' },
  description: site.description,
  openGraph: { title:'Itaja — Your shop, always up to date', description:site.description, type:'website', url:site.url },
  twitter: { card:'summary_large_image', title:'Itaja', description:site.description },
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body><ScrollReveal/><Header/><main>{children}</main><Footer/></body></html>;
}
