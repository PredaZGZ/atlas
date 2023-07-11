const crypto = require('crypto');
const fs = require('fs');

module.exports = {
  encrypt: function(inputFilePath, outputFilePath, encryptionKey) {
    const algorithm = 'aes-256-cbc';
    const iv = crypto.randomBytes(16);

    const cipher = crypto.createCipheriv(algorithm, encryptionKey, iv);

    const input = fs.createReadStream(inputFilePath);
    const output = fs.createWriteStream(outputFilePath);

    output.write(iv);

    input.pipe(cipher).pipe(output);

    input.on('end', () => {
      console.log('Archivo encriptado correctamente.');
    });
  },
  decrypt: function(inputFilePath, outputFilePath, encryptionKey) {
    const algorithm = 'aes-256-cbc';

    const input = fs.createReadStream(inputFilePath);
    const output = fs.createWriteStream(outputFilePath);

    const readIV = Buffer.alloc(16);
    let ivHasBeenRead = false;

    input.on('data', (chunk) => {
      if (!ivHasBeenRead) {
        readIV.set(chunk.slice(0, 16), 0);
        ivHasBeenRead = true;
        return;
      }

      const decipher = crypto.createDecipheriv(algorithm, encryptionKey, readIV);
      const decryptedChunk = Buffer.concat([decipher.update(chunk), decipher.final()]);
      output.write(decryptedChunk);
    });

    input.on('end', () => {
      console.log('Archivo desencriptado correctamente.');
    });
  }
};
