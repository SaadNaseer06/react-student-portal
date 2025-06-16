import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDbzhYfkFzNP4wabRJ9P3WxUnS-DK1xKqA',
  authDomain: 'student-portal-react-app.firebaseapp.com',
  projectId: 'student-portal-react-app',
  storageBucket: 'student-portal-react-app.firebasestorage.app',
  messagingSenderId: '746738989527',
  appId: '1:746738989527:web:f8eb1bb304ebaf472a3392',
  measurementId: 'G-2SZ39HPT9S',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };
