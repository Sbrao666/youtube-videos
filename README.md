# youtube-videos
 
#  Documentation

This is my submission for the assesment given by fampay hiring team.

### project setup
1. Clone the project from   `https://github.com/Sbrao666/youtube-videos` and excute command `npm install`
2. Open the code, go to migration and run query into your local mysql inorder to setup table.
3. Create a env file with name `.env` on to the root folder of application and mention following envrioment variable. 

`DATABASE_URL="mysql://root:root@localhost:3306/youtube-backend"
GOOGLE_YOUTUBE_API__KEY= <USE_YOUR_API_KEY>
GOOGLE_YOUTUBE_API__BASE_URL='https://www.googleapis.com/youtube/v3/search'
PORT =3000`

4. Run the project using command `npm start`.

### API end points
1. Curl for search API 

`curl --location --request GET 'http://127.0.0.1:3000/video?query=bollywood song&order=asc'`

Order is  optional query parameter. it responsible for sort based on publishedAt.


### Cron job for fetching video details from youtube api
Cron job run at interval of every 10 min and save the video published in last 10 mins.


# Notes
1. I am windows 10 user and because of some error and limitation at my system not able to dockerize the application. 
2. Because of this I am not able to install docker on my system.
3. Hence I am sharing the ready to deploy application. 
