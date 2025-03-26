import { Routes, Route } from 'react-router-dom';

// Import your page components here
// import Home from './pages/Home';
// import About from './pages/About';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<div>Home Page</div>} />
      {/* Add your other routes here */}
    </Routes>
  );
}

export default AppRouter;
