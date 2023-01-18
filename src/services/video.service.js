const prisma = require('../../prisma/database')
class VideoService {
    async getVideo(query) {
        try {
            return await prisma.video.findMany({
                where: {
                    OR: [{
                        title: { contains: query }
                    },
                    {
                        description: { contains: query }
                    }]
                }
            })
        } catch (error) {
            throw error
        }
    }

    async saveBulkVideos(videos) {
        try {
            return await prisma.video.createMany({
                data: videos,
                skipDuplicates: true
            })
        } catch (error) {
            throw error
        }
    }
}


module.exports = VideoService