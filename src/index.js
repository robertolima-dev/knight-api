const express = require('express')
const cors = require('cors')
const server = express()
server.use(cors())
server.use(express.json())

const KnightRoutes = require( './routes/KnightRoutes')
server.use("/knights", KnightRoutes);
const HeroesRoutes = require( './routes/HeroesRoutes')
server.use("/heroes", HeroesRoutes);

server.listen(5000, () => {
    console.log('API iniciada na porta 5000')
})