import 'bootstrap';
import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import checkSignIn from './helpers/data/authData';
import navigation from './components/navBar';
import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  navigation.navBar();
  checkSignIn.checkSignInStatus();
};

init();
