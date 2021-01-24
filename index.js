//const fs = require('fs')
/*
//Deleting canada.txt
fs.unlink("Canada.txt", (err) => {
    console.log("File Deleted Successfully...")
})

//Deleting Usa.txt
fs.unlink("Usa.txt", (err) => {
    console.log("File Deleted Successfully...")
})
*/
//Filtering Data and writing data to canada.txt

const fs = require('fs').promises;

async function readFile(filePath) {
  try {
    const data = await fs.readFile(filePath);
    console.log(data.toString());
  } catch (error) {
    console.error(`There was an error while reading the file: ${error.message}`);
  }
}

readFile('input_countries.csv');

fs.unlink("Canada.txt")

fs.unlink("Canada.txt", (err) => {
    console.log("File Deleted Successfully...")
})

async function openFile() {
    try {
      const csvHeaders = 'Canada'
      await fs.writeFile('Canada.txt', csvHeaders);
    } catch (error) {
      console.error(`Error occured while writing to the file: ${error.message}`);
    }
  }

  async function addData(country,year,population) {
    try {
      const csvLine = `\n${country},${year},${population}`
      await fs.writeFile('Canada.txt', csvLine, { flag: 'a' });
    } catch (error) {
      console.error(`Error occured while writing to the file: ${error.message}`);
    }
  }

  (async function () {
    await openFile();
    await addData('country : ', 'Canada');
    await addData('year', 2010);
    await addData('population', '75million');
    await addData('country : ', 'Canada');
    await addData('year', 2018);
    await addData('population', '85million');

  })();