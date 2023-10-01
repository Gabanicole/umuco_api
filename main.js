const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const cors = require('cors');



connectDb();
const app = express();

const port = process.env.PORT || 5000;

// Enable CORS for all routes
app.use(cors({
 origin: ["https://superb-marzipan-11b5f3.netlify.app"],
 methods: ["GET", "POST", "DELETE"],
 credentials: true,
 origin: true,
 })
);

app.use(express.json());
app.use("/api/sites", require ("./routes/siteRoutes"));
app.use("/api/blogs", require("./routes/blogRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {
 console.log(`server running on port ${port}`);
});