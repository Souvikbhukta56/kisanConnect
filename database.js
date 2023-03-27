import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set} from 'firebase/database';

const firebaseConfig = {
    apiKey: "Your firebase api key",
    databaseURL: "Your firebase database url",
    projectId: 'Your firebase project id',
    appId: "Your firebase app id" 
};
  
initializeApp(firebaseConfig);

const dbref = ref(getDatabase());

const storeData= (companyName, target, value) => {
    const db = getDatabase();
    const reference = ref(db, companyName + '/' + target);
    set(reference, value);
}

export {storeData, dbref};