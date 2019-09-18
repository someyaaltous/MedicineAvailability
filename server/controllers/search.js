const getMedInfo = require('./../database/queries/get_med_info.js')

exports.get = (req, res) => {
  getMedInfo(req.params.medname)
    .then(data => res.json({ data }))
    .catch(() => res.status(500).json({ err: 'login Error' }))
}
