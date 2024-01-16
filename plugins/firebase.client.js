import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { ref } from "firebase/storage";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: "AIzaSyATHi7pg2It9N-1nrNFGNmDstEIq_XHCck",
    authDomain: "markdown-editor-y.firebaseapp.com",
    projectId: "markdown-editor-y",
    storageBucket: "markdown-editor-y.appspot.com",
    messagingSenderId: "572057866486",
    appId: "1:572057866486:web:ff1c494e06bf1e061e5cd7",
  };

  const app = initializeApp(firebaseConfig);

  const analytics = getAnalytics(app);
  const storage = getStorage(app);

  const auth = getAuth(app);
  const db = getFirestore(app);
  nuxtApp.provide("firebase", {
    auth,
    db,
    storage,
    ref,
  });
});
