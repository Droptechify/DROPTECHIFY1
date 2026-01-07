// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9acDokPZicSMKRnpB_0TDF5d-qs6xKSo",
  authDomain: "temp-67970.firebaseapp.com",
  projectId: "temp-67970",
  storageBucket: "temp-67970.firebasestorage.app",
  messagingSenderId: "970097167456",
  appId: "1:970097167456:web:6461608bbb5dca023b4705",
  measurementId: "G-P448TXHMBQ"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
const auth = firebase.auth();
