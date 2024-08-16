import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {  
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const persistedAuth = JSON.parse(localStorage.getItem("auth"));
    if (persistedAuth) {
      setAuth(persistedAuth);
    }
  }, []);

  function login(authData) {
    setAuth(authData);
    localStorage.setItem("auth", JSON.stringify(authData));
  }

  function logout() {
    setAuth(null);
    localStorage.removeItem("auth");
  }

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {  
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

// const AuthContext = {
//   AuthProvider,
//   useAuth
// }

export default AuthContext;  
