import firebase from 'firebase/app';
import 'firebase/auth';

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const login = () => {
  const domString = `<div id="auth">
                      <h1>Welcome to Pinterest.</h1>
                      <span style="font-size: 5em; color: Tomato;"></span>
                      <button id="google-auth" class="btn btn-lg" style="background-color: #C8232C; color: white;">
                        Login with <i class="fab fa-google"></i></i>oogle
                      </button>
                    </div>`;
  $('#app').html(domString);
  $('#google-auth').on('click', signIn);
};

export default { login };
