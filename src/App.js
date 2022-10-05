import './App.css';
import Profile from './components/Profile'
import Nav from './components/Nav'
import Browse from './components/Browse'

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Profile></Profile>
        <Browse></Browse>
      </main>
    </div>
  );
}

export default App;