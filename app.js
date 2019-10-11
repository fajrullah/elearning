const admin = require('firebase-admin');
const serviceAccount = require('./service_account.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://json-5146d.firebaseio.com"
  });

admin.database.enableLogging(true);

const db = admin.database();

const ref = db.ref('users');

ref.orderByKey().on("child_added", function(snapshot) {
    console.log(snapshot.key);
  });
  
 