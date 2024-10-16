import express from "express";

const server = express()
const PORT = 8080

const ready = () => console.log("El servidor esta en el puerto "+ PORT);

server.listen (PORT,ready)

