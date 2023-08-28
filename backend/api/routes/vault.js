const router = require('express').Router();
const { createFolder } = require('../controllers/folder');
const { uploadFileToFolder } = require('../controllers/file');
const { getFilesFromFolder, getFoldersByUser } = require('../controllers/vault');
const upload = require('../helpers/upload');

router.get('/folders', getFoldersByUser);
router.post('/folders', createFolder);
router.get('/folders/:id', getFilesFromFolder);
router.post('/folders/:folderId', upload.single('file'), uploadFileToFolder);


module.exports = router;