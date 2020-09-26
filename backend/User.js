const app = require("express")();
app.use(require("body-parser").json());
app.use(require("cookie-parser")());

const admin = require("firebase-admin");
const serviceAccount = require("../secrets/shellhacks2020-290701-firebase-adminsdk-h0fgi-1b93221de5.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://shellhacks2020-290701.firebaseio.com"
});

app.post("/register", async (req, res) => {
  if(!req.body) res.status(400).send('opps, send me some data'); 

  const newUser = await admin.auth().createUser(req.body)
  res.status(200).send(newUser);
});

app.listen(3000, () => console.log("boom!"));