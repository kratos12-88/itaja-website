'use client';
import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const [status,setStatus] = useState('');
  async function submit(e:FormEvent<HTMLFormElement>) {
    e.preventDefault(); setStatus('Sending…');
    const body = Object.fromEntries(new FormData(e.currentTarget).entries());
    const res = await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});
    setStatus(res.ok ? 'Message sent.' : 'Could not send. Please email hello@itaja.ng.');
    if (res.ok) e.currentTarget.reset();
  }
  return <form className="form" onSubmit={submit}><div className="form-row"><input className="input" name="name" placeholder="Name" required/><input className="input" type="email" name="email" placeholder="Email" required/></div><textarea className="input" name="message" placeholder="How can we help?" required/><button className="btn">Send message</button>{status&&<div className="form-status">{status}</div>}</form>;
}
