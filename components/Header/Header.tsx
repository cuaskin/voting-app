import React from 'react';
import { Router } from 'routes';

const Header = () => {
  return (
    <div className="header sticky">
      <ul>
        <li
          onClick={() => {
            Router.pushRoute(`/`);
          }}
        >
          Employees
        </li>
        <li>Logs</li>
      </ul>
    </div>
  );
};

export default Header;
