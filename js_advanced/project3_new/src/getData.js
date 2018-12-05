const axios = require('axios')

const url = 'https://app.ticketmaster.com/discovery/v2'
const apiKey = 'GecRLCOtQFP1FF8IFJi3FmheNczoi35C'

axios.get(`${url}/suggest&apiKey=${apiKey}`)
    .then(res => console.log(res))
