import firebase from 'firebase/app';
import 'firebase/auth';
import signOut from '../../components/navBar';
import auth from '../../components/auth';

const checkSignInStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      signOut.buildSignOutButton();
    } else {
      auth.signIn();
      $('#sign-out-container').html('');
    }
  });
};

export default { checkSignInStatus };
