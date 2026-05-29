import express from 'express';

const app = express();
// remeber in middleware u cant use res.send() or res.json() because it will end the request and response cycle and the next middleware or route handler will not be executed. Instead, you can modify the req object to pass data to the next middleware or route handler, and then call next() to continue the cycle.
app.use((req, res, next) => {
    console.log("Request received");

    req.message = "Hello from middleware";

    next();
});
// //Request
//  ↓
// Middleware
//  ↓

// next()
//  ↓
// Route
//  ↓
// //Response

app.get('/', (req, res) => {
    res.send(req.message + " → Hello from GET");
});

app.get('/user/:id', (req, res) => {
    console.log('GET /user/' + req.params.id);
    res.send("User ID: " + req.params.id);
});

app.listen(8000, () => {
    console.log("Server running");
});

