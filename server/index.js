const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// GET ROUTE
app.get("/api", (req, res) => {
<<<<<<< HEAD
    res.json({ message: "Hello from server! Im running"});
    
=======
    res.json({ message: "Hello from server!" });
    // Test world
>>>>>>> d09b282f2b759f3e2f9bc88dafc7f8d1ae6d91cc
  });
  
// PORT
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });