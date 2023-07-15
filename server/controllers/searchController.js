const axios = require("axios");

// this func searches songs via the itunes api
// waits for keywords and then axios is used for the GET request and gives json back
// errors accounted for with the catch
const searchSongs = async (req, res) => {
    const {keywords} = req.query;

    try {
        const response = await axios.get(`https://itunes.apple.com/search?term=${keywords}&entity=song`);
        
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "oh no, failed to search the songs"});
    }
};

module.exports = {searchSongs,};