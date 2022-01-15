import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useInterval from '../../hooks/useInterval';
import { Status } from '../../types';
import useTimer from './hooks/useHeader';

const Header = () => {
  const location = useLocation();
  const { state, actions } = useTimer();
  const { status, rest } = state;

  const isOpen = true;

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

      {isOpen && <div>Event Status : {Status.Open}</div>}
    </header>
  );
};

export default Header;
