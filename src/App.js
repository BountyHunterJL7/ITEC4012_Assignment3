import './App.css';
import {
  BrowserRouter as Router,
  Routes, 
  Route
} from "react-router-dom";

import {Header} from './components/header';
import {HomePage} from '../src/components/pages/home';
import {IndividualCar} from "../src/components/pages/individual"

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<HomePage/>}>
          </Route>
          <Route path="/car/:id" element={<IndividualCar/>}>
        </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
