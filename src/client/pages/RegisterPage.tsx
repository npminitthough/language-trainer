import { useAuth } from "../auth/AuthContext";
import { register as registerReq } from "../api/auth.api";
import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  async function handleSumbit(e: React.FormEvent) {
    e.preventDefault();
    // send api request
    const { token } = await registerReq(email, username, password);
    // update context
    login(token);
  }

  return (
    <form onSubmit={handleSumbit}>
      <input
        value={email}
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        value={username}
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        value={password}
        placeholder="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSumbit}>Register</button>
    </form>
  );
}
