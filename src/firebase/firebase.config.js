// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBsLN9dPc2AkkG0k2JpkdtqzfCTfEV0BF0',
  authDomain: 'bitsream-a3982.firebaseapp.com',
  projectId: 'bitsream-a3982',
  storageBucket: 'bitsream-a3982.appspot.com',
  messagingSenderId: '473564893267',
  appId: '1:473564893267:web:6bee50c71b511469e176a6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
