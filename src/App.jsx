import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ControlPage from "./pages/ControlPage";
import "./App.css";

function App() {
  return (
    <>
      {" "}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/control" element={<ControlPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
