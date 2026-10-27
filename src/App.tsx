import { TAGS } from './data/tags';

export default function App() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', maxWidth: 640, margin: '3rem auto', padding: '0 1rem' }}>
      <h1>Multi-Select Tag Input</h1>
      <p>
        Placeholder — build your component in <code>src/components/TagInput/</code> and render it here.
      </p>
      <p>{TAGS.length} mock tags available in <code>src/data/tags.ts</code>.</p>
    </main>
  );
}
