// set file system to write the files
const fs = require('fs');

const writeFile = (htmlTemplate) => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', htmlTemplate, (err) => {
      if (err) {
        reject('  ✗   ',err);
        return;
      }
      resolve({
        message: '  √   HTML successfully created.   ',
      });
    });
  });
};

const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile('./src/style.css', './dist/style.css', (err) => {
      if (err) {
        reject('  ✗   ',err);
        return;
      }
      resolve({
        message: '  √   CSS successfully created.   ',
      });
    });
  });
};

module.exports = {writeFile, copyFile};