import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Sidebar from "./components/common/sidebar";
import Menubar from "./components/common/menubar";
import Contact from "./components/contact";
import Charts from "./components/charts";
function App() {
  return (
    <Router>
      <div>
        <Menubar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/contacts" />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/charts-and-maps" element={<Charts />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
