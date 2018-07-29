"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get("/api/sub", function (req, res) {
    res.send([
        { "id": 1, "name": "Ori", "email": "ori@gmail.com" },
        { "id": 2, "name": "Roni", "email": "roni@gmail.com" },
        { "id": 3, "name": "Udi", "email": "udi@gmail.com" }
    ]);
});
app.listen(3000, function () {
    console.log("Server is running");
});
//# sourceMappingURL=main.js.map