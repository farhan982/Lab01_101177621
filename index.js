const fs = require('fs')

//Deleting canada.txt
fs.unlink("Canada.txt", (err) => {
    console.log("File Deleted Successfully...")
})

//Deleting Usa.txt
fs.unlink("Usa.txt", (err) => {
    console.log("File Deleted Successfully...")
})
