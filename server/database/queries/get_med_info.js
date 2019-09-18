const dbConnection = require('./../db_connection')

const getMedInfo = medicine => {
    return dbConnection
        .query(
            'select * from pharmacy inner join pharmacy_to_medicine on pharmacy_to_medicine.pharmacyID = pharmacy.pharmacyID inner join medicine on pharmacy_to_medicine.medicineID = medicine.medicineID where name ilike $1', [medicine]
        )
        .then(res => res.rows)
        .catch(err => console.log(err))
}

module.exports = getMedInfo