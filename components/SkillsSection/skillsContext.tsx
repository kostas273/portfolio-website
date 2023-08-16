import { PropsWithChildren, createContext, useReducer, Dispatch } from 'react';

interface State {
  transitionsStarted: boolean;
  transitionsFinished: boolean;
}

type Action =
  | { type: 'SET_TRANSITIONS_STARTED' }
  | { type: 'SET_TRANSITIONS_FINISHED' }
  | { type: 'RESET_TRANSITIONS_STATE' }

const initialState: State = {
  transitionsStarted: false,
  transitionsFinished: false
};

export const skillsReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_TRANSITIONS_STARTED':
      return { ...state, transitionsStarted: true };
    case 'SET_TRANSITIONS_FINISHED':
      return { ...state, transitionsFinished: true };
    case 'RESET_TRANSITIONS_STATE':
      return { ...initialState };
    default:
      return state;
  }
};

export const SkillsContext = createContext<{ state: State; dispatch: Dispatch<Action> }>({ state: initialState, dispatch: () => { } });

export const SkillsContextProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(skillsReducer, initialState);

  return (
    <SkillsContext.Provider value={{ state, dispatch }}>
      {children}
    </SkillsContext.Provider>
  );
};
