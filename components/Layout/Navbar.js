import React from 'react';
import Link from 'next/link';

const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="http:///speedrun.com">
      SPEEDRUN
    </a>
    <ul className="nav">
      <li className="nav-item">
        <Link href="/index">
          <a className="nav-link active text-light">Home</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
