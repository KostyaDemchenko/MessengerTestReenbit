import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Chat from './components/Chat';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Nav />
      <Chat />
    </div>);
}

export default App;
