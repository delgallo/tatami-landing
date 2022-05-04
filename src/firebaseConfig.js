import { initializeApp } from 'firebase/app'
import { collection, query, getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC5Ob4CkisdJ74JXGU1wccOKewoRuyCuPc",
    authDomain: "tatami-a4b0a.firebaseapp.com",
    projectId: "tatami-a4b0a",
    storageBucket: "tatami-a4b0a.appspot.com",
    messagingSenderId: "619499073048",
    appId: "1:619499073048:web:e3382d1db54fd62e6e5d6d",
    measurementId: "G-MD3QSCXTRQ"
  }

// init firebase app
initializeApp(firebaseConfig)

// init db
const db = getFirestore()
// init auth
const auth = getAuth()

// collection reference
const referrals = collection(db, 'referrals')

// get collection data
query(referrals, wehere("parent", "==", "uid"))
  .then(snapshot => console.log(snapshot))