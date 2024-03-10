"use strict"

const book=require("../controllers/bookController")
const bookRouter=require("express").Router()

bookRouter.route("/").get(book.list).post(book.create)
bookRouter.route("/:id").get(book.read).put(book.update).patch(book.update).delete(book.delete)

module.exports=bookRouter