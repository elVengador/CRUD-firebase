import admin from 'firebase-admin'
import serviceAccount from './serviceAccountKey.json'

if(!admin.apps.length){
    try {
        admin.initializeApp({
            credential:admin.credential.cert(serviceAccount)
        })
    } catch (err) {
        console.log('Error: Firebase initializer error',err);
    }
}

export default admin.firestore()