import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";

// INIT FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyBNQh8U9rl9HSgvYvS5_ujyDXGJHNbM7B4",
  authDomain: "highstart-480cd.firebaseapp.com",
  projectId: "highstart-480cd",
  storageBucket: "highstart-480cd.appspot.com",
  messagingSenderId: "30377976822",
  appId: "1:30377976822:web:00763527e4874fad0d9dd7",
  measurementId: "G-WV79G5EEQJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


function createUser(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    // const user = userCredential.user;
    alert("User Created")
    // ...
  })
  .catch((error) => {
    alert(error);
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // ..
  });
}

// LOGIN
function loginUser(email, password){
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        // const user = userCredential.user;
        alert("Signed In")
        // ...
    })
    .catch((error) => {
        alert(error)
        // const errorCode = error.code;
        // const errorMessage = error.message;
    });
}

// LOG OUT
function signUserOut() {
  signOut(auth).then(() => {
    alert("Signed Out!")
  }).catch((error) => {
    alert(error)
  });
}



export { createUser, loginUser, signUserOut }