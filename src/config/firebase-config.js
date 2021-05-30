import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyBBqBh4DsXZ3_d3F1lwkdamMxqr3dm3KXk',
  authDomain: 'my-blog-site-23384.firebaseapp.com',
  projectId: 'my-blog-site-23384',
  storageBucket: 'my-blog-site-23384.appspot.com',
  messagingSenderId: '383494117032',
  appId: '1:383494117032:web:ebb3ffd2adf8264bde949d',
  measurementId: 'G-D9286FH7S0',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
