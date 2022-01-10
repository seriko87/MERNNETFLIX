import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyB60rFUnqzJTQo0bVdruTsdaS4Pz9ELgOI',
  authDomain: 'netflix-67eff.firebaseapp.com',
  projectId: 'netflix-67eff',
  storageBucket: 'netflix-67eff.appspot.com',
  messagingSenderId: '803789279145',
  appId: '1:803789279145:web:a51568324e4f8efa993eb8',
  measurementId: 'G-BHLK4JDJ7L',
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
export default storage;
