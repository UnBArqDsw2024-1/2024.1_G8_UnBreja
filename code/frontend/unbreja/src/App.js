import { BrowserRouter, Routes, Route } from "react-router-dom";

import InitialPage from "./pages/InitialPage";
import LoginPage from "./pages/LoginPage";
import SingUpPage from "./pages/SingUpPage"; // Usando "SingUpPage" em vez de "SignUpPage"
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/entrar" element={<LoginPage />} />
        <Route path="/cadastrar" element={<SingUpPage />} />{" "}
        {/* Rotas ajustadas */}
        <Route path="/perfil" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
