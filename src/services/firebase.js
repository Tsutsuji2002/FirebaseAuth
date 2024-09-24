import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCp1SCMDziHTBfQ4o0c8WktCHiMGSaLDZA",
  authDomain: "todoapp-37c3a.firebaseapp.com",
  projectId: "todoapp-37c3a",
  storageBucket: "todoapp-37c3a.appspot.com",
  messagingSenderId: "136198658502",
  appId: "1:136198658502:android:d2ffb498bfa7977c11bac7"
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

const db = getFirestore(app);

// export { auth, db };