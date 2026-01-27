import { useAuth } from "../auth/AuthContext";
import { login as loginReq } from "../api/auth.api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleLoginButton from "../components/googleLoginButton";

export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

 async function handleSumbit(e: React.FormEvent) {
        e.preventDefault()
        // send api request
        const {token} = await loginReq(email, password)
        // update context
        login(token)
        navigate('/quizes')
    }

  return (
    <form onSubmit={handleSumbit}>
      <input
        value={email}
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
        <input
        value={password}
        placeholder="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Login</button>
      <GoogleLoginButton />
    </form>
  );
}
