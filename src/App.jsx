import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { auth } from "./firebase_config";
import { onAuthStateChanged } from "firebase/auth";
import Signup from "./components/signup";
import Signin from "./components/signin";
import Home from "./components/home"; // ✅ Corrected to Home
import Homepage from "./homepage"; 
import "./App.css";
import Transaction from './Transaction';
import Layout from './Layout';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        {/* Layout wraps all the pages that need the AppBar */}
        <Route index element={<Home />} /> 
        <Route path="/" element={<Layout />}>
          {/* ✅ Changed Homepage → Home */}
          <Route path="Homepage" element={<Homepage />} />
          <Route path="Transaction" element={<Transaction />} />
        </Route>

        {/* Authentication Routes */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
