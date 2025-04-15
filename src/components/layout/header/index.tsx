import { Link } from '@tanstack/react-router';

import { ModeToggle } from '../../mode-toggle';

export function Header() {
  return (
    <header className="flex items-center justify-between border-b p-2">
      <nav className="flex gap-2">
        <Link className="[&.active]:font-bold" to="/">
          Home
        </Link>{' '}
        <Link className="[&.active]:font-bold" to="/about">
          About
        </Link>
        <Link className="[&.active]:font-bold" to="/dashboard">
          Dashboard
        </Link>
      </nav>
      <div>
        <ModeToggle />
      </div>
    </header>
  );
}
