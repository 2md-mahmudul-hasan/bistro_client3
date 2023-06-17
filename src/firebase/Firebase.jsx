
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.evn.VITE_apiKey,
  authDomain: import.meta.evn.VITE_authDomain,
  projectId: import.meta.evn.VITE_projectId,
  storageBucket: import.meta.evn.VITE_storageBucket,
  messagingSenderId: import.meta.evn.VITE_messagingSenderId,
  appId: import.meta.evn.VITE_appId

};

const app = initializeApp(firebaseConfig);
export default app;