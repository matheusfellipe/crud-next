import {initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore';



  const dataBase = initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain:process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId:process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
    })

    const app = getFirestore(dataBase)
    export default app