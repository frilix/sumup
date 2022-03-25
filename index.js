const express = require('express');
const app = express()
const axios = require('axios');
const PORT = process.env.PORT || 5000;
const qs = require('qs');
const lib = require('./src/lib')
const server = app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

app.use(express.json())

app.post('/sumup', (req, res) => {
  const json = req.body
  const  result = lib.checksum(lib.sumArray(json.address.values))
  res.json({result: result});
})

app.get('/', (req, res) => {
  try {
    const response =  axios({
      url: 'https://pure-harbor-98276.herokuapp.com/sumup',
      method: 'post',
      data: {
        address: {
         values:[
           74,
           117,
           115,
           116,
           79,
           110]
        }
      },
      paramsSerializer: function(params) {
        return qs.stringify(params, {arrayFormat: 'repeat'})
      }
    }).then(function (response) {
      res.json(response.data)
    })    
  } catch (error) {
      console.log(error)
  } 
})