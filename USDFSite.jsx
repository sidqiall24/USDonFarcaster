import React from "react";

export default function USDFSite() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#4c1d95', color: 'white', padding: '2rem' }}>
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>$USDF - The Most Trustworthy Fake Dollar</h1>
        <p style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '1rem auto' }}>
          The meme coin that feels like a stablecoin, but is backed by vibes, memes, and a screenshot of the Fed.
        </p>
        <button style={{ backgroundColor: 'white', color: '#4c1d95', fontWeight: 'bold', fontSize: '1.125rem', padding: '0.5rem 1.5rem', borderRadius: '1rem' }}>
          Mint $USDF Now
        </button>
      </section>

      <section style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', maxWidth: '960px', margin: '0 auto 3rem' }}>
        <div style={{ backgroundColor: '#5b21b6', borderRadius: '1rem', padding: '1.5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Backed by Memes</h2>
          <p>100% stabilized by Farcaster vibes and weekly meme contests.</p>
        </div>
        <div style={{ backgroundColor: '#5b21b6', borderRadius: '1rem', padding: '1.5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Governed by Degens</h2>
          <p>Powered by the Degenerate Autonomous Organization (DAO).</p>
        </div>
        <div style={{ backgroundColor: '#5b21b6', borderRadius: '1rem', padding: '1.5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Cast to the Moon</h2>
          <p>Tip casters, flex your bags, and meme your way to the top.</p>
        </div>
      </section>

      <footer style={{ textAlign: 'center', opacity: 0.7, fontSize: '0.875rem' }}>
        © 2025 $USDF Meme Coin • Fake Dollar, Real Vibes
      </footer>
    </main>
  );
}