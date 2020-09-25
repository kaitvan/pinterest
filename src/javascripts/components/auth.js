import firebase from 'firebase/app';
import 'firebase/auth';

const signInModal = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const signIn = () => {
  const domString = `<div id="auth">
                      <h1>Welcome to Pinterest.</h1>
                      <button id="google-auth" class="btn btn-lg mt-4" style="background-color: #C8232C; color: white;">
                        Sign In with <i class="fab fa-google"></i></i>oogle
                      </button>
                    </div>`;
  $('#app').html(domString);
  $('#google-auth').on('click', signInModal);
};

export default { signIn };
