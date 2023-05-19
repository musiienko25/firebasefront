import "./App.css";
import { useEffect, useState } from "react";
import { app } from "./firebaseConfig";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
function App() {
  const auth = getAuth();
  let googleProvider = new GoogleAuthProvider();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleInputs = (event) => {
    let inputs = { [event.target.name]: event.target.value };

    setData({ ...data, ...inputs });
  };

  const addData = () => {
    signInWithPopup(auth, googleProvider)
      .then((response) => {
        console.log(response.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
    // signInWithEmailAndPassword(auth, data.email, data.password);
  };

  const handlelogout = () => {
    signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if (data) {
        console.log(data);
        alert("Logged In");
      } else {
        alert("Not Logged In");
      }
    });
  }, []);
  return (
    <div className="App-header">
      <input
        placeholder="Email"
        name="email"
        type="email"
        className="input-fields"
        onChange={(event) => handleInputs(event)}
      />
      <input
        placeholder="Password"
        name="password"
        type="password"
        className="input-fields"
        onChange={(event) => handleInputs(event)}
      />

      <button onClick={addData}>Log In</button>
      <button onClick={handlelogout}>Log out</button>
    </div>
  );
}

export default App;
