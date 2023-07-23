const File = require('../models/File');
const { encrypt, decrypt } = require('../helpers/encrypt');

const uploadFile = async (req, res) => {
  try {
    const { originalname, filename, path, size } = req.file;
    const folderId = req.params.folderId;

    const file = new File({
      originalName: originalname,
      filename: filename,
      path: path,
      size: size,
      folder: folderId
    });

    await file.save();

    res.json(file);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const encryptFile = async (req, res) => {
  try {
    const fileId = req.params.fileId;

    const file = await File.findById(fileId);

    if (!file) {
      return res.status(404).json({ msg: 'File not found' });
    }

    const { path } = file;
    const encryptedFilePath = `encrypted-${file.filename}`;

    const encryptionKey = 'your_encryption_key_here'; // Cambia esto con tu propia clave de encriptación

    encrypt(path, encryptedFilePath, encryptionKey);

    file.isEncrypted = true;
    await file.save();

    res.json(file);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const decryptFile = async (req, res) => {
  try {
    const fileId = req.params.fileId;

    const file = await File.findById(fileId);

    if (!file) {
      return res.status(404).json({ msg: 'File not found' });
    }

    const { path } = file;
    const decryptedFilePath = `decrypted-${file.filename}`;

    const encryptionKey = 'your_encryption_key_here'; // Cambia esto con tu propia clave de encriptación

    decrypt(path, decryptedFilePath, encryptionKey);

    file.isEncrypted = false;
    await file.save();

    res.json(file);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const getFile = async (req, res) => {
  try {
    const fileId = req.params.fileId;

    const file = await File.findById(fileId);

    if (!file) {
      return res.status(404).json({ msg: 'File not found' });
    }

    res.json(file);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  uploadFile,
  encryptFile,
  decryptFile,
  getFile
};
