import { BrowserRouter, Routes, Route } from "react-router-dom";

import InitialPage from "./pages/InitialPage";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";
import DescriptionProfilePage from "./pages/DescriptionProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/cadastrar" element={<SignUpPage />} />{" "}
        <Route path="/perfil" element={<ProfilePage />} />
        <Route
          path="/descricaoperfil/usuario"
          element={<DescriptionProfilePage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
