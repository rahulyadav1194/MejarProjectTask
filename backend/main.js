const express = require("express");

const db = require ('./databaseConfig.js')

const cors = require('cors')

let studentRouter = require('./routes/studentRoute.js')

let adminRouter= require('./routes/adminRoute.js')

let cartRouter = require('./routes/cartRoute.js')

let app = express()
  
 
app.use(express.json()) 
app.use(cors())

db.connect((err)=>{   
    if(err) throw err 
    else{
        console.log('dataBase connected')  
    }
})

let StudentTableQuery = `CREATE TABLE if not exists student (  
    id INT NOT NULL AUTO_INCREMENT,
    Name VARCHAR(45) NULL,
    Father VARCHAR(45) NULL,
    Mother VARCHAR(45) NULL,
    Age VARCHAR(55) NULL,
    Mobile BIGINT(15) NULL,
    Address VARCHAR(45) NULL,
    Class VARCHAR(45) NULL,
    PRIMARY KEY (id));` 
  
    db.query(StudentTableQuery,(err, result)=>{
        if(err) throw err
        else{
            console.log('student table create')
        }
    })

    let AdminTableQuery = `CREATE TABLE if not exists admin (  
        id INT NOT NULL AUTO_INCREMENT,
        email VARCHAR(45) NULL,
        password VARCHAR(45) NULL,
        PRIMARY KEY (id));` 
      
        db.query(AdminTableQuery,(err, result)=>{
            if(err) throw err
            else{
                console.log('admin table create')
            } 
        })

        let CartTableQuery = `CREATE TABLE if not exists cart (  
            id INT NOT NULL AUTO_INCREMENT,
            Name VARCHAR(45) NULL,
            Father VARCHAR(45) NULL,
            Mother VARCHAR(45) NULL,
            Age VARCHAR(55) NULL,
            Mobile BIGINT(15) NULL,
            Address VARCHAR(45) NULL,
            Class VARCHAR(45) NULL,
            PRIMARY KEY (id));` 
          
            db.query(CartTableQuery,(err, result)=>{
                if(err) throw err
                else{
                    console.log('cart table create')
                }
            })

    app.use('/api', studentRouter)

    app.use('/api', adminRouter)

    app.use('/api' , cartRouter)
    
    app.listen(3000,()=>{
        console.log('server is running is port 3000')
    })