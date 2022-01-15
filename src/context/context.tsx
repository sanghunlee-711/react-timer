import { createContext, Dispatch } from 'react';

interface IInitialState {
  status: string;
  rest: number;
}

type Actions =
  | { type: 'SET_STATUS'; payload: string }
  | { type: 'SET_REST'; payload: number };

type SampleDispatch = Dispatch<Actions>;

export const TimerStateContext = createContext<IInitialState | null>(null);
export const TimerDispatchContext = createContext<SampleDispatch | null>(null);

export function reducer(state: IInitialState, action: Actions) {
  switch (action.type) {
    case 'SET_STATUS':
      return {
        ...state,
        status: action.payload,
      };
    case 'SET_REST':
      return {
        ...state,
        rest: action.payload,
      };

    default:
      throw new Error('Unhandled action');
  }
}
