import React from 'react';
import './styles/App.scss';
import { store } from './app/store';
import { Provider } from 'react-redux';
import Jugadores from './components/Jugadores';
import EquipoSeleccionado from './components/EquipoSeleccionado'

export default function App() {
  return (
    <Provider store={store}>
      <main className='App'>
        <h1><u>Team manager</u></h1>
        <hr />
        <Jugadores />
        <EquipoSeleccionado />
      </main>
    </Provider>
  );
}