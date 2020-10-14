import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyAVo_WUO6eeUNmyG1a_uNSbdxJsTWdDV0g",
  authDomain: "e-clone-c6934.firebaseapp.com",
  databaseURL: "https://e-clone-c6934.firebaseio.com",
  projectId: "e-clone-c6934",
  storageBucket: "e-clone-c6934.appspot.com",
  messagingSenderId: "627451636669",
  appId: "1:627451636669:web:4c47f00428d77d21f440d4",
  measurementId: "G-XPS6NCFM28"
};

const amazoneClone = firebase.initializeApp(firebaseConfig);
const firestore = amazoneClone.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { firestore, auth, storage }
