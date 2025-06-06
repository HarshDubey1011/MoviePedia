const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://fullstack:${password}@practice.lylwpda.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Practice`;

mongoose.set("strictQuery", false);

mongoose.connect(url);

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

const notes = [
  { content: "HTML is easy", important: true },
  { content: "Helsinki is best resource out there", important: false },
  { content: "DSA linked list I have to start", important: true },
  { content: "Spring Boot tutorial I have to finish", important: false },
  { content: "Aptitude is imp but not for me", important: true },
];

// Note.insertMany(notes)
//   .then((result) => {
//     console.log(result);
//     console.log("results saved");
//   })
//   .catch((error) => {
//     console.log(error);
//   });
Note.find({}).then((result) => {
  result.map((note) => console.log(note));
  mongoose.connection.close();
});
