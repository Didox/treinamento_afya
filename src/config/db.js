const { Pool } = require('pg');
module.exports = {
  execute: async (sql, valores) => {
    const pool = process.env.NODE_ENV == "production" ? new Pool({ssl: true}) : new Pool();
    const res = await pool.query(sql, valores);
    await pool.end();
    return res.rows;
  }
}