import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function Hello() {
  return <div>我的应用</div>;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
