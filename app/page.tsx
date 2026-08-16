'use client';

import { useChat } from '@ai-sdk/react';
import { useEffect, useState } from 'react';

const starter = 'Help me plan my next coding task.';

export default function Home() {
  const [input, setInput] = useState('');
  const { messages, sendMessage, status, error } = useChat();
  const busy = status === 'submitted' || status === 'streaming';
  useEffect(() => { localStorage.setItem('ocode-messages', JSON.stringify(messages)); }, [messages]);

  return <main>
    <aside>
      <div className="brand"><span>⌘</span><strong>OCode</strong></div>
      <p className="eyebrow">YOUR CODING WORKSPACE</p>
      <button className="new" onClick={() => window.location.reload()}>+ New conversation</button>
      <section><b>Connected workspace</b><p>GitHub connection is coming next.</p></section>
      <section><b>How it works</b><p>Chat from any device. OCode never accesses a project or runs a command without a future, explicit connection and approval.</p></section>
      <footer>OCode Web · v0.1</footer>
    </aside>
    <section className="chat">
      <header><div><p className="eyebrow">OCode Web</p><h1>Build from anywhere.</h1></div><span className="status">● Online</span></header>
      <div className="messages">
        {error && <div className="error">OCode could not reach OpenAI. Add a valid <code>OPENAI_API_KEY</code> in this Vercel project’s Environment Variables, then try again.</div>}
        {!messages.length && <div className="empty"><span>⌘</span><h2>What are we making?</h2><p>Start with an idea, a bug, or a repository task. GitHub projects and safe code execution are the next milestones.</p><button onClick={() => sendMessage({ text: starter })}>{starter}</button></div>}
        {messages.map(message => <article className={message.role} key={message.id}><label>{message.role === 'user' ? 'You' : 'OCode'}</label>{message.parts.map((part, index) => part.type === 'text' ? <p key={index}>{part.text}</p> : null)}</article>)}
      </div>
      <form onSubmit={event => { event.preventDefault(); if (input.trim() && !busy) { sendMessage({ text: input }); setInput(''); } }}>
        <textarea value={input} onChange={event => setInput(event.target.value)} placeholder="Ask OCode anything about your project…" rows={3} />
        <div><small>AI responses may be imperfect. Review every change before using it.</small><button disabled={busy} type="submit">{busy ? 'Thinking…' : 'Send ↗'}</button></div>
      </form>
    </section>
  </main>;
}
