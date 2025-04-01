import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCNWIPRb4UmvLIiKQqmcP5kf12i6ZgHopQ",
  authDomain: "healthcare-hub-dd177.firebaseapp.com",
  projectId: "healthcare-hub-dd177",
  storageBucket: "healthcare-hub-dd177.appspot.com",
  messagingSenderId: "403510205382",
  appId: "1:403510205382:web:befd89c8938ab8b72370c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);
