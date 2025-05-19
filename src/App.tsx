import { useState } from 'react';
import './App.css';

function App() {
  const [url, setUrl] = useState("");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-blue-500 px-4">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-lg text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">URL Shortener</h1>
        <p className="text-gray-600 mb-6">
          Paste your long URL and get a shortened version instantly.
        </p>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter your URL"
          className="w-full border border-gray-400 text-black rounded-md px-4 py-3 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={async () => {
              try {
                const text = await navigator.clipboard.readText();
                setUrl(text);
              } catch (err) {
                console.error('Failed to read clipboard contents:', err);
              }
            }}
            className="bg-gray-100 hover:bg-gray-200 text-white px-6 py-2 rounded-md transition font-medium"
          >
            Paste
          </button>
          <button
            onClick={async () => {
              if (!url) {
                alert('Please enter a URL');
                return;
              } }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition font-medium"
          >
            Shorten
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
