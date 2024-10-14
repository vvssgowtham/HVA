const express = require("express");
const app = express();

// Application-level middleware

app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

app.use("/user/:id", (req, res, next) => {
  console.log("Request Type:", req.method);
  next();
});

app.get("/user/:id", (req, res, next) => {
  res.send("USER");
});

app.use(
  "/requests/:id",
  (req, res, next) => {
    console.log("Request URL:", req.originalUrl);
    next();
  },
  (req, res, next) => {
    console.log("Request Type:", req.method);
    next();
  }
);

//Here if param is 0 then next api end point gets called but it only gets invoked only if both have same end point i.e requests/:id and if there is any other then it results in error.
app.get(
  "/requests/:id",
  (req, res, next) => {
    // if the user ID is 0, skip to the next route
    if (req.params.id === "0") next("route");
    // otherwise pass the control to the next middleware function in this stack
    else next();
  },
  (req, res, next) => {
    // send a regular response
    res.send("regular");
  }
);

// handler for the /user/:id path, which sends a special response
app.get("/user/:id", (req, res, next) => {
  res.send("special");
});

// Router Level MiddleWare

// Error-handling middleware
//An error middle ware should contain for sure 4 attributes even though we don;t use next we should take it.

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Built-in middleware

app.use(express.json());
app.post("/test", (req, res) => {
  res.json(req.body);
});

// Third-party middleware : Body-Parser is example for it.

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
