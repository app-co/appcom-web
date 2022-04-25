import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDIt9itZB9rqft6NP9yZqUpQgQIlCxjMeA",
    authDomain: "appcom-6235f.firebaseapp.com",
    projectId: "appcom-6235f",
    storageBucket: "appcom-6235f.appspot.com",
    messagingSenderId: "889052405619",
    appId: "1:889052405619:web:408d4a6488b93d389baf06",
    measurementId: "G-QL3SY0ZZNV"
  };

  const app = initializeApp(firebaseConfig)

  export const db = getFirestore(app);