import firebase from 'firebase/app';
import 'firebase/auth';
import logo from '../../assets/images/pinterest-logo.png';

const signOutEvent = () => {
  $('#sign-out-btn').on('click', (e) => {
    e.preventDefault();
    console.warn('sign out clicked!');
    firebase.auth().signOut();
    window.location.href = '/';
  });
};

const navBar = () => {
  $('#nav').html(
    `<nav class="navbar navbar-light bg-light d-flex">
      <a class="navbar-brand justify-content-start" href="#">
        <img src="${logo}" width="55" height="30" alt="Pinterest Logo">
      </a>
      <div id="sign-out-container"></div>
    </nav>`
  );
};

const buildSignOutButton = () => {
  $('#sign-out-container').append(`
  <button type="button" id="sign-out-btn" class="btn btn-danger justify-content-end">Sign Out</button>
  `);
  signOutEvent();
};

export default { navBar, buildSignOutButton };
