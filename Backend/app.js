const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require("./Routes/user.routes");
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);

app.get('/', (req, res) => {
    res.send('🚀 Server and MongoDB connected successfully!');
});

async function startServer() {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`🚀 Server is running at http://localhost:${PORT}`);
    });
}

startServer();
