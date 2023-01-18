class VideoController {
    async getVideo(req, res) {
        await res.send("inside get video controller updated")
    }
}


module.exports = VideoController