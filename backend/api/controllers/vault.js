const Folder = require('../models/Folder');
const File = require('../models/File');


module.exports = {
    getFoldersByUser : async (req, res) => {
        try {
          const userId = req.user.id;
          const userFolders = await Folder.find({ user: userId });
      
          const folders = userFolders.map(folder => {
            return {
              id: folder._id,
              name: folder.name,
              files: folder.files.length
            }
          });
      
          res.status(200).json(folders);
          
        } catch (err) {
          console.error(err.message);
          res.status(500).send('Server Error');
        }
    },
    getFilesFromFolder: async (req, res) => {
      try {
        const folderId = req.params.id;    
        const folder = await Folder.findById(folderId).populate('files');
    
        if (!folder) {
          return res.status(404).json({ msg: 'Folder not found' });
        }
    
        res.status(200).json(folder.files);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }    
    }
    
}