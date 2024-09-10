import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Experties from "./components/Experties";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/experties" element={<Experties />} />
      </Routes>
    </Router>
  );
}

export default App;
