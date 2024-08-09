import { BrowserRouter, Routes, Route } from "react-router-dom";

import InitialPage from "./pages/InitialPage"
import LoginPage from "./pages/LoginPage"
import SingUpPage from "./pages/SingUpPage"

function App() {
  return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<InitialPage />} />
          <Route path="/entrar" element={<LoginPage />} />
          <Route path="/cadastrar" element={< SingUpPage />}/>
        </Routes>
      </BrowserRouter >
  );
}

export default App;
