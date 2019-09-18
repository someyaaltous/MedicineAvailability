const dbConnection = require('./../dbConnection')

const pharmacyInfo = () => {
  return dbConnection
    .query(
      'select pharmacyname,location from pharmacy'
    )
    .then(response => response.rows)
    .catch(erorr => console.log(erorr))
}

module.exports = pharmacyInfo
