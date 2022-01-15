import { useReducer } from 'react';
import { reducer, TimerDispatchContext, TimerStateContext } from './context';

export function TimerProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    status: '',
    rest: 0,
  });

  return (
    <TimerStateContext.Provider value={state}>
      <TimerDispatchContext.Provider value={dispatch}>
        {children}
      </TimerDispatchContext.Provider>
    </TimerStateContext.Provider>
  );
}
