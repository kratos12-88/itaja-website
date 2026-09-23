'use client';

import { useState } from 'react';

export default function StorefrontLinkDemo() {
  const [copied, setCopied] = useState(false);
  const url = 'itaja.ng/closetbyada';

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(`https://${url}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  }

  return (
    <div className="store-link-demo" aria-label="Example Itaja storefront link">
      <div>
        <span>YOUR ITAJA STOREFRONT</span>
        <strong>{url}</strong>
      </div>
      <button type="button" onClick={copyLink}>{copied ? 'Copied ✓' : 'Copy link'}</button>
    </div>
  );
}
