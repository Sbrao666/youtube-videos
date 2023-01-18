const cron = require('node-cron');
const axios = require('axios');
const moment = require('moment')
const VideoService = require('../../services/video.service');

const searchQueries = [
    "cat videos",
    "dog videos",
    "funny videos",
    "best music videos",
    "dance videos",
    "food videos",
    "travel vlogs",
    "science experiments",
    "DIY tutorials"
];


cron.schedule("*/1 * * * *", async function () {
    const datePublished = '2023-01-01T00:00:00Z';
    const GOOGLE_YOUTUBE_API__BASE_URL = process.env.GOOGLE_YOUTUBE_API__BASE_URL
    const GOOGLE_YOUTUBE_API__KEY = process.env.GOOGLE_YOUTUBE_API__KEY

    try {
        const videoRequest = []
        for (let searchQuery of searchQueries) {
            const response = await axios.get(GOOGLE_YOUTUBE_API__BASE_URL, {
                params: {
                    key: GOOGLE_YOUTUBE_API__KEY,
                    q: searchQuery,
                    part: 'snippet',
                    type: 'video',
                    maxResults: 50
                    // publishedAfter: datePublished
                },
            });
            const videos = response.data.items

            if (!videos) continue

            for (let video of videos) {
                if (!video.snippet.title) continue
                videoRequest.push({
                    title: video.snippet.title,
                    description: video.snippet.description ?? null,
                    publishedAt: video.snippet.publishTime ?? null,
                    highThumbnail: video.snippet.thumbnails.high.url ?? null,
                    mediumThumbnail: video.snippet.thumbnails.medium.url ?? null,
                    defaultThumbnail: video.snippet.thumbnails.default.url ?? null
                })
            }
        }
        const savedVideos = await new VideoService().saveBulkVideos(videoRequest)
        console.log(`cron job completed and interted new ${savedVideos.count} videos in the database`)
    } catch (error) {
        console.log(error)
    }
});