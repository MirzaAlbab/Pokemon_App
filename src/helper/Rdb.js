import {firebase} from '@react-native-firebase/database';

export const Rdb = firebase
  .app()
  .database(
    'https://pokemon-5208e-default-rtdb.asia-southeast1.firebasedatabase.app/',
  );
