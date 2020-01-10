const express = require('express');
const router = express.Router();


router.get('/', (req, res)=>{
  res.send('This is offices route');
});


module.exports = router;