const fs = require("fs");
//universally unique identifer from npm package
const { v4: uuidv4 } = require('uuid');
const data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

module.exports = (app) => {
//get data from json file
  app.get("/api/notes", (req, res) => {
      res.send(data);
  });

//post data from json file, assign id to new note, add the note
  app.post("/api/notes", (req, res) => {
      let newNote = req.body;
      newNote.id = uuidv4();
      data.push(newNote);
      fs.writeFileSync('./db/db.json', JSON.stringify(data));
      res.send(data);
  });
};
