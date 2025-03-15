import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase_config";
import { signInWithEmailAndPassword } from "firebase/auth";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Added loading state
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Signed in successfully!");
      navigate("/homepage"); // Navigate to homepage
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); // Stop loading regardless of success or failure
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSignin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default Signin;
