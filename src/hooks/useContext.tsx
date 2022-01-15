import { useContext } from 'react';
import { TimerDispatchContext, TimerStateContext } from '../context/context';

export function useTimerState() {
  const state = useContext(TimerStateContext);
  if (!state) throw new Error('Cannot find SampleProvider'); // 유효하지 않을땐 에러를 발생
  return state;
}

export function useTimerDispatch() {
  const dispatch = useContext(TimerDispatchContext);
  if (!dispatch) throw new Error('Cannot find SampleProvider'); // 유효하지 않을땐 에러를 발생
  return dispatch;
}
