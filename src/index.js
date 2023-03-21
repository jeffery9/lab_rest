const express = require("express");
const bodyParser = require("body-parser");


const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");


const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
// app.use(cache("2 minutes"));


// For testing purposes 
app.get("/", (req, res) => {
    res.send("<h2>It's Working!</h2>");
});

app.use("/api/v1/workouts", v1WorkoutRouter);


app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
    V1SwaggerDocs(app, PORT);

});