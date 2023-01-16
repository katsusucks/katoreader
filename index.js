const fs = require('fs');
const path = require('path');

function checkSize(folderName) {
  fs.stat(folderName, (err, stats) => {
    if (err) {
      if (err.code === 'ENOENT') {
        console.error(`[Katoreader]: No such directories found as [${folderName}]`);
        return;
      }
      console.error(err);
      return;
    }
    let folder = path.basename(folderName);
    console.log(`[${folder}] Size: ${stats.size} bytes`);
  });
}

module.exports = {
  checkSize
}



