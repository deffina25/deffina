import { BrowserRouter, useRoutes } from 'react-router-dom';
import { AppContext } from './AppContext.tsx';
import { useReducer } from 'react';
import { appReducer, initialState } from './reduser/Reduser.ts';
import Layout from './components/Layout';
import routes from '~react-pages';
import './App.css';

function AppRoutes() {
  const element = useRoutes(routes);
  return <Layout>{element}</Layout>;
}

export default function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const value = { state, dispatch };

  return (
    <BrowserRouter>
      <AppContext.Provider value={value}>
        <AppRoutes />
      </AppContext.Provider>
    </BrowserRouter>
  );
}
