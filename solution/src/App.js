import logo from './logo.svg';
import './App.css';
//Components
import Header from './components/Header';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <Header/>
      <UserList/>
    </div>
  );
}

export default App;
