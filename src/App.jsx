import React, { useEffect, useRef } from 'react';
import rawHtml from './content.html?raw';

export default function App() {
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    // Helper to load external scripts sequentially
    const loadScript = (src, isModule = false) => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const s = document.createElement('script');
        s.src = src;
        if (isModule) s.type = 'module';
        s.onload = resolve;
        s.onerror = reject;
        document.body.appendChild(s);
      });
    };

    async function initApp() {
      try {
        // Load Webflow dependencies first
        await loadScript('https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6a44eec1ed1af2c4c403df6b');
        await loadScript('https://cdn.prod.website-files.com/6a44eec1ed1af2c4c403df6b/js/webflow.schunk.e661489a1c70db1e.js');
        await loadScript('https://cdn.prod.website-files.com/6a44eec1ed1af2c4c403df6b/js/webflow.schunk.b0f75d092c3d39b9.js');
        await loadScript('https://cdn.prod.website-files.com/6a44eec1ed1af2c4c403df6b/js/webflow.9d979e0d.ce21502f658531f1.js');

        // Dynamically load the main 3D & Barba application engine
        await loadScript('/main.js', true);
      } catch (err) {
        console.error('Error initializing United Carriers React engine:', err);
      }
    }

    initApp();
  }, []);

  return (
    <div
      id="app-container"
      dangerouslySetInnerHTML={{ __html: rawHtml }}
    />
  );
}
