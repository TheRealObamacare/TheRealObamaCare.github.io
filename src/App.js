import { BrowserRouter as Router } from 'react-router-dom';
import './css/App.css';
import AppRouter from './AppRouter';

function App() {
  return (
    <Router basename="/">
      <AppRouter />
    </Router>
  );
}

export default App;
