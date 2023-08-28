const Folder = require('../models/Folder');

const createFolder = async (req, res) => {
  try {
    const { name } = req.body;
    const userId = req.user.id; // ID del usuario obtenido desde el token

    const folder = new Folder({
      name,
      user: userId
    });

    await folder.save();
    res.json(folder);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};



module.exports = {
  createFolder,
};
