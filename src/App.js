import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

import Login from './components/Login';
import Cabezal from './components/Cabezal';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Mapa from './components/Mapa';
import NoEncontrado from './components/NoEncontrado';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cabezal />}>
            <Route path="register" element={<Register />} />
            <Route path="/" element={<Login />} />
            <Route path="/index.html" element={<Login />} />
            <Route path="/obligatorio-front-end/" element={<Login />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="mapa" element={<Mapa />} />
            <Route path="*" element={<NoEncontrado />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
