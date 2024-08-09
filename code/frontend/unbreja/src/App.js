import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage"
import SingupPage from "./pages/SingupPage"

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={< SingupPage />}/>
        </Routes>
      </BrowserRouter >
  );
}

export default App;
