import firebase from 'firebase/app';
import 'firebase/auth';
import signOut from '../../components/navBar';
import auth from '../../components/auth';
import viewListener from '../viewHelper';

const checkSignInStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      signOut.buildSignOutButton();
      viewListener.viewListener('boards');
    } else {
      auth.signIn();
      $('#sign-out-container').html('');
    }
  });
};

export default { checkSignInStatus };
