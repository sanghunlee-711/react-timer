import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Status } from '../../types';
import useHeader from './hooks/useHeader';

const Header = () => {
  const location = useLocation();
  const { state } = useHeader();
  const { status, rest } = state;

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        padding: '0 50px',
      }}
    >
      {location.pathname === '/event' ? (
        <Link to="/">
          <button>Home</button>
        </Link>
      ) : (
        <Link to="/event">
          <button>Event</button>
        </Link>
      )}

      {status === Status.Open && <div>Event Status : {Status.Open}</div>}
    </header>
  );
};

export default Header;
