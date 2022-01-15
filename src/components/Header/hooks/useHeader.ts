import { useEffect } from 'react';
import { getDate } from '../../../api';
import { useTimerDispatch, useTimerState } from '../../../hooks/useContext';
import { Status } from '../../../types';

const useTimer = () => {
  const dispatch = useTimerDispatch();
  const contextState = useTimerState();
  const { status, rest } = contextState;

  const handleDate = async () => {
    const res = await getDate();
    const { start, end } = res;
    const now = Date.now();

    if (now < start) {
      dispatch({ type: 'SET_STATUS', payload: Status.Ready });
      dispatch({ type: 'SET_REST', payload: 0 }); //초로 환산필요
    } else if (start <= now && now <= end) {
      dispatch({ type: 'SET_STATUS', payload: Status.Open });
      dispatch({ type: 'SET_REST', payload: (end - start) / 1000 }); //초로 환산필요
    } else if (now > end) {
      dispatch({ type: 'SET_STATUS', payload: Status.End });
      dispatch({ type: 'SET_REST', payload: 0 }); //초로 환산필요
    } else {
      dispatch({ type: 'SET_STATUS', payload: 'Default' });
    }
  };

  useEffect(() => {
    handleDate();
  }, []);

  return {
    state: { status, rest },
    actions: {},
  };
};

export default useTimer;
