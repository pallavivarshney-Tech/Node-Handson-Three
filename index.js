const express=require('express');

const port = 8000
const app = express()

const middlewareOne = (req, res, next) => {
    console.log("This is first  middleware")
    next()
  }
  
const middlewareTwo = (req, res, next) => {
    console.log("This is second middleware")
    next()
  }
  app.use(middlewareOne) 
  app.get("/", (req, res) => {
    res.send("Hello World") 
  })
  
  app.get("/About", (req, res) => {
    res.send("<h1>Welcome to About Page<h1>")
  })

  app.get("/Section", middlewareTwo, (req, res) => {
    res.send("<h1>We are learning about middleware</h1>")
  })
  
  app.get("/Contact", middlewareTwo, (req, res) => {
    res.send("<h1>This is hands-on three</h1>")
  })
  
  app.listen(port)
  