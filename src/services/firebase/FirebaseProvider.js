// libs
import { createFirestoreInstance } from 'redux-firestore';

// services
import firebase from './index';

// store
import store from '../../store';

const rrfProps = {
  firebase,
  config: {
    userProfile: 'users',
    useFirestoreForProfile: true,
  },
  dispatch: store.dispatch,
  createFirestoreInstance,
};

export default rrfProps;
