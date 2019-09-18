const pharmacyInfo = require('../database/queries/pharmacy_info.js')

exports.getpharmacyInfo = (request, response) => {
    pharmacyInfo()
        .then(data => response.json({ data }))
        .catch(() => response.status(500).json({ err: 'login Error' }))
}