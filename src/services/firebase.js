import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  //apiKey: "YOUR_API_KEY",
  authDomain: "fir-auth-38867.firebaseapp.com",
  projectId: "fir-auth-38867",
  storageBucket: "fir-auth-38867.appspot.com",
  messagingSenderId: "491553028527",
  appId: "1:491553028527:android:b55e9ec149ddb6faafd75a"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

const db = getFirestore(app);

export { auth, db };