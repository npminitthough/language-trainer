import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContextProvider, useAuth } from "./auth/AuthContext";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import QuizesPage from "./pages/QuizesPage";
import OAuthSuccessPage from "./pages/OAuthSuccessPage";

export default function App() {
  function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { token } = useAuth();
    return token ? <>{children}</> : <Navigate to="/login" />;
  }

  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/oauth-success" element={<OAuthSuccessPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/quizes"
            element={
              <ProtectedRoute>
                <QuizesPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}
