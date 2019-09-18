const dbConnection = require('./../db_connection')

const getPharmacyInfo = (pharmacyID, name) => {
    return dbConnection
        .query(
            'select* from medicine inner join pharmacy_to_medicine on medicine.medicineID = pharmacy_to_medicine.medicineID where medicine.name ilike $1 and pharmacyID =$2', [name, pharmacyID]
        )
        .then(res => res.rows[0])
        .catch(err => console.log(err))
}

module.exports = getPharmacyInfo