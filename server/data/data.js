const { Pool } = require('pg');
require("dotenv").config();

const pool = new Pool({
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    database: process.env.PG_DB,
    port: process.env.PG_PORT
});
module.exports = {
    pool
}