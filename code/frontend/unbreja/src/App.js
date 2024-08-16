import { BrowserRouter, Routes, Route } from "react-router-dom";
import InitialPage from "./pages/InitialPage";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";
import DescriptionProfilePage from "./pages/DescriptionProfilePage";
import LoginPage from "./pages/LoginPage";
import SwipePage from "./pages/SwipePage";
import ProtectedRoute from "./helpers/protectedRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InitialPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cadastrar" element={<SignUpPage />} />
          <Route path="/perfil" element={<ProfilePage />} />
          <Route path="/combinacao" element={<ProtectedRoute element={<SwipePage />} />} />
          <Route path="/descricaoperfil/:id" element={<ProtectedRoute element={<DescriptionProfilePage />} />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
