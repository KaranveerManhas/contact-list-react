import './App.css';

// React Router
import { BrowserRouter as Router, Route, Routes } from'react-router-dom';

// Components
import Home from './pages/home/Home';
import { LayoutComponent } from './components/layout/Layout';

function App() {

  return (
    <Router>
      <div className="App">
        <LayoutComponent>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </LayoutComponent>
      </div>
    </Router>
  );
}

export default App;
