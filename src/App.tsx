
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import PageLayOut from "./pages/PageLayOut";

function App() {
  return (
    <Router>
      <Routes>

        <Route element={<PageLayOut/>}>
          <Route path="/" element={<HomePage />} />
        </Route>
        
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
