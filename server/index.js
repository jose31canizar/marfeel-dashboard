const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const port = 8000;

app.use(express.static(path.resolve(__dirname, "../client/", "build")));

app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(express.json());
app.use(morgan("combined"));

const data1 = {
  metric: "revenue",
  color: "red",
  color1: {
    r: "48",
    g: "86",
    b: "20"
  },
  color2: {
    r: "127",
    g: "210",
    b: "49"
  },
  points: [
    {
      amount: 2,
      device: "tablet"
    },
    {
      amount: 12,
      device: "smartphone"
    },
    {
      amount: 50,
      device: "tablet"
    },
    {
      amount: 15,
      device: "smartphone"
    },
    {
      amount: 10,
      device: "tablet"
    },
    {
      amount: 10,
      device: "smartphone"
    },
    {
      amount: 20,
      device: "tablet"
    },
    {
      amount: 39,
      device: "smartphone"
    },
    {
      amount: 61,
      device: "tablet"
    },
    {
      amount: 13,
      device: "tablet"
    },
    {
      amount: 13,
      device: "tablet"
    },
    {
      amount: 13,
      device: "tablet"
    },
    {
      amount: 13,
      device: "tablet"
    },
    {
      amount: 13,
      device: "tablet"
    }
  ]
};

const data2 = {
  metric: "impressions",
  color: "blue",
  color1: {
    r: "36",
    g: "65",
    b: "83"
  },
  color2: {
    r: "96",
    g: "189",
    b: "220"
  },
  points: [
    {
      amount: 2,
      device: "tablet"
    },
    {
      amount: 12,
      device: "smartphone"
    },
    {
      amount: 50,
      device: "tablet"
    },
    {
      amount: 65,
      device: "smartphone"
    },
    {
      amount: 10,
      device: "tablet"
    },
    {
      amount: 10,
      device: "smartphone"
    },
    {
      amount: 60,
      device: "tablet"
    },
    {
      amount: 39,
      device: "smartphone"
    },
    {
      amount: 61,
      device: "tablet"
    },
    {
      amount: 13,
      device: "tablet"
    }
  ]
};

const data3 = {
  metric: "visits",
  color: "green",
  color1: {
    r: "182",
    g: "69",
    b: "29"
  },
  color2: {
    r: "238",
    g: "183",
    b: "37"
  },
  points: [
    {
      amount: 2,
      device: "tablet"
    },
    {
      amount: 42,
      device: "smartphone"
    },
    {
      amount: 50,
      device: "tablet"
    },
    {
      amount: 15,
      device: "smartphone"
    },
    {
      amount: 1,
      device: "tablet"
    },
    {
      amount: 20,
      device: "smartphone"
    },
    {
      amount: 20,
      device: "tablet"
    },
    {
      amount: 39,
      device: "smartphone"
    },
    {
      amount: 1,
      device: "tablet"
    },
    {
      amount: 13,
      device: "tablet"
    }
  ]
};

app.get("/revenue", (req, res) => res.json(data1));

app.get("/impressions", (req, res) => res.json(data2));

app.get("/visits", (req, res) => {
  console.log("bye");
  res.json(data3);
});

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../", "build", "index.html"));
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
