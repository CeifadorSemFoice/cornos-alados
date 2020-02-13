const Corno = require('../models/Corno')
const axios = require('axios')

module.exports = {
  async index (req, res) {
    try {
      const ipAddress = req.header('x-forwarded-for') || req.connection.remoteAddress;
      const response = await axios.get(`http://ip-api.com/json/${ipAddress}`)

      const { query: ip } = response.data;

      let corno = await Corno.findOne({ ip })

      if (corno) {
        await Corno.findByIdAndUpdate(corno.id, { $set: { ...response.data } })
      } else {
        corno = await Corno.create({ ip, ...response.data })
      }

      res.render('index', { data: response.data })
    } catch (err) {
      console.error(err)
      return res.status(500).send('Erro ao carregar a página')
    }
  }
}
