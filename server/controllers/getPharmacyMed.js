const updatePharmacyInfo = require('./../database/queries/update_pharmacy_info')

exports.updatePharmacy = (req, res) => {
  const { pharmacyID } = req
  updatePharmacyInfo(pharmacyID, req.params.medname)
    .then(data => res.json(data))
    .catch(() => res.status(500).json({ err: 'login Error' }))
}
