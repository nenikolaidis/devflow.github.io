/* =========================================================
   FIREBASE CONFIG — replace with your own project's config
   Firebase console → Project settings → General → Your apps → SDK setup
   (The compat SDK scripts are loaded in index.html before this module,
   so the global `firebase` object is already available here.)
========================================================= */
const firebaseConfig = {
  apiKey: "AIzaSyDU6gphWwsBhGBx5XXmiBg07frrBkHriZM",
  authDomain: "devflow-board-b45c1.firebaseapp.com",
  projectId: "devflow-board-b45c1",
  storageBucket: "devflow-board-b45c1.firebasestorage.app",
  messagingSenderId: "80877882513",
  appId: "1:80877882513:web:521270b5460359c8c6c330"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
