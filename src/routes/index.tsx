import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

import viteLogo from '/vite.svg';

import cloudflareLogo from '../assets/Cloudflare_Logo.svg';
import reactLogo from '../assets/react.svg';
import { Button } from '../components/ui/button';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('unknown');

  return (
    <div className="flex flex-col items-center gap-8 text-center">
      <div className="flex">
        <a href="https://vite.dev" rel="noreferrer" target="_blank">
          <img alt="Vite logo" className="logo" src={viteLogo} />
        </a>
        <a href="https://react.dev" rel="noreferrer" target="_blank">
          <img alt="React logo" className="logo react" src={reactLogo} />
        </a>
        <a
          href="https://workers.cloudflare.com/"
          rel="noreferrer"
          target="_blank"
        >
          <img
            alt="Cloudflare logo"
            className="logo cloudflare text-foreground"
            src={cloudflareLogo}
          />
        </a>
      </div>
      <h1 className="text-4xl font-bold">Vite + React + Cloudflare</h1>
      <div>
        <Button
          aria-label="increment"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
        <p className="mt-2">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div>
        <Button
          aria-label="get name"
          onClick={() => {
            fetch('/api/')
              .then((res) => res.json() as Promise<{ name: string }>)
              .then((data) => setName(data.name));
          }}
        >
          Name from API is: {name}
        </Button>
        <p className="mt-2">
          Edit <code>worker/index.ts</code> to change the name
        </p>
      </div>
      <p className="text-[#888]">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}
