import {getApp, getApps, initializeApp} from 'firebase/app'

import {getFirestore} from 'firebase/firestore'

import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDTSci_24r9Eo60O0EW0FrxZ4hw0U7oylY",
    authDomain: "cakeshop-e94a5.firebaseapp.com",
    databaseURL: "https://cakeshop-e94a5-default-rtdb.firebaseio.com",
    projectId: "cakeshop-e94a5",
    storageBucket: "cakeshop-e94a5.appspot.com",
    messagingSenderId: "420008819235",
    appId: "1:420008819235:web:10a44ecffeda9821418f96"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);

const storage = getStorage(app);

export {app, firestore, storage};