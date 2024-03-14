const jwt = require("jsonwebtoken");

async function authenticateUser(req, res, next){
  const user = req.headers.authorization
  
  const token = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ3MTgzMDFhMmUxYWRmNjFiYjIyM2YiLCJpYXQiOjE3MDkwNDIyMDl9.XkG8yPVT5znIrMoI1ninaa_aeQsYW5U5pLtohkN1Bj4`
  if(user === token){
  await next()
}else{
  res.status(401).json({message : "Unauthorized"})
}
}


module.exports = authenticateUser;
