const app = require("express")();
app.use(require("body-parser").json());
app.use(require("cookie-parser")());
const corsOptions = {
  origin: true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(require("cors")(corsOptions));

const admin = require("firebase-admin");
const serviceAccount = require("../secrets/shellhacks2020-290701-firebase-adminsdk-h0fgi-1b93221de5.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://shellhacks2020-290701.firebaseio.com",
});
const db = admin.firestore();

app
  .post("/action", async (req, res) => {
    const {
      body: data,
      query: { docid },
    } = req;
    const uuid = req.header("uuid");
    await db.collection(uuid).doc(`action-${docid}`).set(data);
    res.status(201).send("saved");
  })
  .get("/action", async (req, res) => {
    const uuid = req.header("uuid");
    const data = await db.collection(uuid).get();
    console.log(data);
    const response = [];
    data.forEach((doc) => response.push(doc.data()));
    res.status(200).send(response);
  })
  .put("/action", async (req, res) => {
    const {
      body: data,
      query: { docid },
    } = req;
    console.log(req.params);
    const uuid = req.header("uuid");
    let oldData = await db.collection(uuid).doc(`action-${docid}`).get();
    oldData = oldData.data();
    Object.keys(data).forEach((key) => {
      if (oldData.hasOwnProperty(key)) {
        if (data[key] !== null) {
          oldData[key] = data[key];
        } else {
          delete oldData[key];
        }
      } else {
        oldData[key] = data[key];
      }
    });
    await db.collection(uuid).doc(`action-${docid}`).set(oldData);
    res.status(200).send("updated");
  })
  .delete("/action", async (req, res) => {
    const {
      query: { docid },
    } = req;
    const uuid = req.header("uuid");
    await db.collection(uuid).doc(`action-${docid}`).delete();
    res.status(200).send("deleted");
  });

app.listen(3000, () => console.log("boom!"));
