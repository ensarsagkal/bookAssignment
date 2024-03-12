"use strict"
const{Sequelize,DataTypes}=require("sequelize")
// const sequelize = new Sequelize('sqlite:./db.sqlite3')
const sequelize = new Sequelize('postgres://userBook:12345678@localhost:5432/bookApp')
const Book=sequelize.define("books",{
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    author:{
        type:DataTypes.STRING,
        allowNull:false
    },
    ISBN:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    genre:{
        type:DataTypes.STRING,
        allowNull:false
    },
    publicationYear:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    image:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

//
// sequelize.sync({ alter: true }) // TO BACKUP & DROP TABLE & CREATE TABLE & FROM BACKUP
sequelize.authenticate()
.then(()=>console.log("*DB Connection is Succesfull*"))
.catch(()=>console.log("*DB Connection Failed"))



module.exports = Book