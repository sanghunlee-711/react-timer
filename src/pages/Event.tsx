import React, { useState } from 'react';
import { useTimerState } from '../hooks/useContext';
import useInterval from '../hooks/useInterval';
import { Status } from '../types';
import { twoDigits } from '../utils';

const Event = () => {
  const state = useTimerState();
  const { rest, status } = state;
  console.log(state, twoDigits);
  const [secondsRemaining, setSecondsRemaining] = useState<number>(rest);

  const secondsToDisplay = secondsRemaining % 60;
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;
  const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60;

  useInterval({
    callback: () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining((prev) => prev - 1);
      } else {
        setSecondsRemaining(0);
      }
    },
    delay: status === Status.Open ? 1000 : null,
  });

  return (
    <section>
      <div>Status: {status}</div>
      {status === Status.Open && (
        <div>
          {twoDigits(hoursToDisplay)}:{twoDigits(minutesToDisplay)}:
          {twoDigits(secondsToDisplay)}
        </div>
      )}
    </section>
  );
};

export default Event;
