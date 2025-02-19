import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvZGjY960ozg33gdfmzwf8sTcmCq3do6U",
  authDomain: "kapusta-c9147.firebaseapp.com",
  projectId: "kapusta-c9147",
  storageBucket: "kapusta-c9147.firebasestorage.app",
  messagingSenderId: "91415513983",
  appId: "1:91415513983:web:a3316404cabbf66496684a",
  measurementId: "G-CNFFWNL7TF",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };

//npm install firebase
//npm install react-icons

//apiKey: 'your-api-key',
//authDomain: 'your-auth-domain',
//projectId: 'your-project-id',
//storageBucket: 'your-storage-bucket',
//messagingSenderId: 'your-messaging-sender-id',
//appId: 'your-app-id',
