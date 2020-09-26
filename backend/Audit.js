/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */

const app = require("express")();
app.use(require('body-parser').json())
app.use(require('cookie-parser')())
const fs = require("fs");
const jwt = require("jsonwebtoken");

const createJwt = (projectId, privateKeyFile, algorithm) => {
  // Create a JWT to authenticate this device. The device will be disconnected
  // after the token expires, and will have to reconnect with a new token. The
  // audience field should always be set to the GCP project id.
  const token = {
    iat: parseInt(Date.now() / 1000),
    exp: parseInt(Date.now() / 1000) + 20 * 60, // 20 minutes
    aud: projectId,
  };
  const privateKey = fs.readFileSync(privateKeyFile);
  return jwt.sign(token, privateKey, { algorithm: algorithm });
};

const privatekey = "./secrets/rsa_private.pem";
const algo = "RS256";
const projectId = "shellhacks";

app.post("/login", (req, res) => {
  let message = req.query.message || req.body.message || "Hello World!";
  const token = createJwt(projectId, privatekey, algo);
  res.cookie("token", token);
  res.status(200).send(message);
});

app.listen(3000, () => console.log("boom!"));
