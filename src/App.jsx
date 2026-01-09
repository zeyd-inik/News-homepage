import './App.css';

import Main from './components/Main';
import Nav from './components/Nav';

export default function App() {
  return (
    <main className="App">
      <div className="container">
        <Nav />
        <Main />
      </div>
    </main>
  );
}
