const fs = require('fs')

const dbConnection = require('./dbConnection')

const sql = fs.readFileSync(`${__dirname}/dbBuild.sql`).toString()

const runDbBuild = cb => dbConnection.query(sql, cb)

runDbBuild((err, res) => {
  if (err) {
    throw err
  }
  return res
})

module.exports = runDbBuild
