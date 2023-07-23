const router = require('express').Router();
const { getFoldersByUser, createFolder } = require('../controllers/folder');

router.get('/folders', getFoldersByUser);
router.post('/folders', createFolder);


module.exports = router;