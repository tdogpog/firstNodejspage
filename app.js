const express = require("express");
const path = require("path");

const app = express();

//send the file, use path.join to make it os agnostic in the fetch
//__dirname is directory that the server sits in, serve the index
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.get("/about", (req, res) =>
  res.sendFile(path.join(__dirname, "about.html"))
);
app.get("/contact-me", (req, res) =>
  res.sendFile(path.join(__dirname, "contact-me.html"))
);

//catchall route
//set status to 404 and serve the 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

//dont need next() because the .get .use ends response with the file send
