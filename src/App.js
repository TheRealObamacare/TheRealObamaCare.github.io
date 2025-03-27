import './css/App.css';
// No need to import Router here as AppRouter already includes it
import AppRouter from './AppRouter.jsx';

// Import CSS files
import './css/main.css';
import './css/tailwind.css';

function App() {
  // Use AppRouter directly without wrapping it in another Router
  return (
    <AppRouter />
  );
}

export default App;
