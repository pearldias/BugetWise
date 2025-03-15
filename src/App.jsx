// import { useEffect, useState } from "react";
// import { auth } from "./firebase_config";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import Signup from "./components/signup";
// import Signin from "./components/signin";

// const App = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setUser(user);
//     });
//     return () => unsubscribe();
//   }, []);

//   return (
//     <div>
//       {user ? (
//         <div>
//           <h2>Welcome, {user.email}!</h2>
//           <button onClick={() => signOut(auth)}>Sign Out</button>
//         </div>
//       ) : (
//         <>
//           <Signup />
//           <Signin />
//         </>
//       )}
//     </div>
//   );
// };

// export default App;
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { auth } from "./firebase_config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Signup from "./components/signup";
import Signin from "./components/signin";
import Home from "./components/home";
import "./App.css";


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
      <div>
        {user ? (
          <div className="auth-container">
            <h2>Welcome, {user.email}!</h2>
            <button className="signout-btn" onClick={() => signOut(auth)}>Sign Out</button>
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
