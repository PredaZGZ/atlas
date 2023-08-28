const multer = require('multer');
const path = require('path');
const fs = require('fs').promises;

// Function to specify the destination and filename for storing the uploaded files
const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const userId = req.user.id; // Assuming you have the user's ID stored in req.user.id
    const folderPath = path.join(__dirname, '../..', 'cloud', userId);

    // Create the folder if it doesn't exist
    try {
      await fs.mkdir(folderPath, { recursive: true });
      cb(null, folderPath);
    } catch (err) {
      cb(err);
    }
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

module.exports = upload;
