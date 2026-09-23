'use client';

import { FormEvent, useState } from 'react';

export default function WaitlistForm() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true); setStatus('');
    const form = new FormData(e.currentTarget);
    const body = Object.fromEntries(form.entries());
    try {
      const res = await fetch('/api/leads', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(body) });
      if (!res.ok) throw new Error('Could not submit');
      setStatus('You’re on the list. We’ll keep you posted.');
      e.currentTarget.reset();
    } catch {
      setStatus('Something went wrong. Please try again.');
    } finally { setLoading(false); }
  }

  return (
    <form className="form" onSubmit={submit}>
      <div className="form-row"><input className="input" name="name" placeholder="Your name" required/><input className="input" name="phone" placeholder="WhatsApp number" required/></div>
      <div className="form-row"><input className="input" name="email" type="email" placeholder="Email address"/><input className="input" name="store_name" placeholder="Store name / Instagram handle"/></div>
      <select className="input" name="role" defaultValue="vendor"><option value="vendor">I sell on Instagram / TikTok</option><option value="buyer">I’m interested as a buyer</option><option value="partner">Partnership / media</option></select>
      <button className="btn" disabled={loading}>{loading ? 'Joining…' : 'Join early access'}</button>
      {status && <div className="form-status" role="status">{status}</div>}
    </form>
  );
}
