import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyD67i8zNfwadofc60nVsRZ4pjz-U1wgxpw',
  authDomain: 'markdown-bba9a.firebaseapp.com',
  databaseURL: 'https://markdown-bba9a.firebaseio.com',
  projectId: 'markdown-bba9a',
  storageBucket: 'markdown-bba9a.appspot.com',
  messagingSenderId: '717836129305',
  appId: '1:717836129305:web:68bec46878fbb380a7c688',
}

firebase.initializeApp(firebaseConfig)

export default firebase.database()
