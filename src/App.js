import { HashRouter as Router } from 'react-router-dom';
import './css/App.css';
import AppRouter from './AppRouter';

function App() {
  // Using HashRouter for better GitHub Pages compatibility
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}

export default App;
