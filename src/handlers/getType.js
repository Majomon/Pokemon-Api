const getTypeController= require("../controllers/getTypeController")

const getType = async (req, res) => {
    try {
      const typesApi = await getTypeController();
      res.status(200).json(typesApi);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  module.exports = getType;
  