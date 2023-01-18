const VideoService = require("../services/video.service")

class VideoController {
    async getVideo(req, res) {
        try {
            const { query } = req.query
            if (!query) return res.status(400).send({ message: "Please send search query in the request" })

            const videoServiceInstance = new VideoService()
            const videos = await videoServiceInstance.getVideo(query);
            console.log(videos)
            if (!(videos && videos?.length)) return res.status(400).send({ message: "No videos found with this query" })

            res.status(200).send(videos);
        } catch (error) {
            res.status(500).send({ message: error.message })
        }

    }
}


module.exports = VideoController