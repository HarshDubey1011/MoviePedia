require("dotenv").config();
const phoneRouter = require("express").Router();
const PhoneBook = require("../models/newmongo");

const dummyPhonebookData = [
  { name: "John Smith", number: "2025550143" },
  { name: "Emma Johnson", number: "4155550198" },
  { name: "Liam Williams", number: "3125550125" },
  { name: "Olivia Brown", number: "6465550112" },
  { name: "Noah Davis", number: "2135550183" },
  { name: "Ava Wilson", number: "4085550177" },
  { name: "Elijah Taylor", number: "3055550166" },
  { name: "Isabella Moore", number: "7185550133" },
  { name: "James Anderson", number: "2065550190" },
  { name: "Sophia Martinez", number: "5035550155" },
];
// const name = process.argv[2];
// const number = process.argv[3];

// const phone = new PhoneBook({
//   name: name,
//   number: number,
// });

// phone
//   .save()
//   .then((result) => {
//     console.log(result);
//     console.log("Phone Book saved successfully!");
//     mongoose.connection.close();
//   })
//   .catch((error) => {
//     console.log(error, "Error");
//   });

// Adding many data together
// PhoneBook.insertMany(dummyPhonebookData)
//   .then((result) => {
//     console.log("data added successfully!");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

phoneRouter.get("/", (req, res) => {
  PhoneBook.find({}).then((result) => {
    res.json(result);
  });
});

phoneRouter.post("/", (req, res, next) => {
  const { name, number } = req.body;

  if (!name) {
    return res.status(400).json({ error: "No name provided" });
  }

  const phone = new PhoneBook({
    name: name,
    number: number,
  });

  phone
    .save()
    .then((result) => {
      console.log("result saved successfully!");
      res
        .status(200)
        .json({ message: "Data added to the database successfully!" });
    })
    .catch((error) => {
      console.log("error", error);
      next(error);
    });
});

// get the single data
phoneRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  PhoneBook.findById(id)
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
    });
});

// delete the data from the mongodb
phoneRouter.delete("/:id", (req, res, next) => {
  const id = req.params.id;

  PhoneBook.findByIdAndDelete(id)
    .then((result) => {
      if (result) {
        res
          .status(200)
          .json({ message: "Deleted successfully!", data: result });
      } else {
        res.status(404).json({ message: "Entry not found" });
      }
    })
    .catch((error) => {
      console.error("Error deleting entry:", error);
      res.status(500).json({ message: "Internal Server Error" });
    });
});

phoneRouter.put("/:id", (req, res, next) => {
  const { name, number } = req.body;
  const id = req.params.id;
  PhoneBook.findByIdAndUpdate(id)
    .then((result) => {
      if (!result) {
        return res.status(404).json({ message: "No data found" });
      }

      result.name = name;
      result.number = number;

      return result.save().then((updatedPhoneBook) => {
        res.json(updatedPhoneBook);
      });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = phoneRouter;
