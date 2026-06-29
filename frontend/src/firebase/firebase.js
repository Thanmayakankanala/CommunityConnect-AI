// Import Firebase SDK
import { initializeApp } from "firebase/app";

// Firestore Database
import { getFirestore } from "firebase/firestore";

// Authentication
import { getAuth } from "firebase/auth";

// Storage (for uploading images later)
import { getStorage } from "firebase/storage";

// Your Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt3G8jhIL-FMPCmDHqeu6Ov5Not_8_iMc",
  authDomain: "communityconnect-ai-f1430.firebaseapp.com",
  projectId: "communityconnect-ai-f1430",
  storageBucket: "communityconnect-ai-f1430.firebasestorage.app",
  messagingSenderId: "748300144266",
  appId: "1:748300144266:web:910684316c2958df26e773",
  measurementId: "G-VEB5SPLN75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;