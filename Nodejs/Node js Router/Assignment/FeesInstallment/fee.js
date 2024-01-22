const express = require("express");
const app = express.Router();
const bodyParse = require("body-parser");

const Student_Fees = [
  {
    id: 1,
    name: "Sagar khemnar ",
    amount: 10000,
    date: "12/10/2023",
    mode: "online",
  },
  {
    id: 2,
    name: "Akash Argade ",
    amount: 20000,
    date: "13/09/2023",
    mode: "Cash",
  },
  {
    id: 3,
    name: "Rushi Daye",
    amount: 30000,
    date: "14/09/2023",
    mode: "online",
  },
  {
    id: 4,
    name: "Swapnil Gite",
    amount: 40000,
    date: "15/09/2023",
    mode: "cash",
  },
  {
    id: 5,
    name: "suraj Bombale",
    amount: 50000,
    date: "12/14/2023",
    mode: "cash",
  },
];

let TotalFee = 100000;

app.get("/fee", (req, resp) => {
  resp.send(Student_Fees);
});

app.get("/fee/:id", (req, resp) => {
  const student = Student_Fees.find((el) => el.id === Number(req.params.id));

  if (student) {
    const totalFeePaid = Student_Fees.filter(
      (el) => el.id === Number(req.params.id)
    ).reduce((acc, curr) => acc + curr.amount, 0);

    const balanceAmount = TotalFee - totalFeePaid;

    resp.send(
      `Total Amount paid by ${student.name} is  ${totalFeePaid},Remaining fee is ${balanceAmount}. From ${TotalFee}.`
    );
  } else {
    resp.send("Record not found.......");
  }
});

app.post("/fee/paid", (req, resp) => {
  const a = req.body.name;
  const b = req.body.amount;
  const c = req.body.date;
  const d = req.body.mode;

  if (!a || !b || !c || !d) {
    resp.send("Enter a total field");
  }

  const newOne = {
    id: Student_Fees.length+ 1,
    name: a,
    amount: b,
    date: c,
    mode: d,
  };

  const push=Student_Fees.push(newOne);

  resp.send(newOne);
});
module.exports = app;
