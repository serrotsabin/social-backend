const admin = require("firebase-admin");

// const serviceAccount = require("../../social-b663b-firebase-adminsdk-i9uf2-e6597fe641.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://social-b663b.firebaseio.com",
//   storageBucket: "social-b663b.appspot.com"
// });

admin.initializeApp();

const db = admin.firestore()

module.exports = {admin,db}