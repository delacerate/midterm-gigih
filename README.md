# TOKOPEDIA clone, still backend only
# database collections schema 

## Table of content
* [Database Structure](#database-structure)
* [API Structures](#api-structures)
* [RUN Locally](#how-to-run-locally)

## Database Structure
### videos
```
{
  "VideoID": "string",
  "Url": "string",
  "Thumbnail": "string"
}

```
### products 
```
{
  "ProductID": "string",
  "Link": "string",
  "Title": "string",
  "Price": "number",
  "VideoID": "string"
}
```

### users
```
{
  "Username": "string",
  "Comment": "string",
  "Timestamp": "date",
  "VideoID": "string"
}
```
## api-structures
### Videos Endpoints:
GET /api/videos/:videoId

Returns the details of a specific video based on the provided videoId.

    URL Params
        Required: videoId

    Data Params
    None

    Headers
    Content-Type: application/json

    Success Response
        Code: 200
        Content:
```
{
  "videoId": "video_id",
  "url": "https://www.youtube.com/watch?v=video_id",
  "thumbnail": "https://img.youtube.com/vi/video_id/hqdefault.jpg"
}
```

### Products Endpoints:

    GET /api/products/:productId

    Returns the details of a specific product based on the provided productId.

        URL Params
            Required: productId

        Data Params
        None

        Headers
        Content-Type: application/json

        Success Response
            Code: 200
            Content:
```
{
  "productId": "product_id",
  "link": "https://example.com/product_id",
  "title": "Product Title",
  "price": 19.99
}
```
### comments endpoint

- GET /api/comments/:videoId

    Returns the comments for a specific video based on the provided videoId.

        URL Params
            Required: videoId

        Data Params
        None

        Headers
        Content-Type: application/json

        Success Response
            Code: 200
            Content:
```

        {
          "comments": [
            {
              "username": "user1",
              "comment": "This is a great video!",
              "timestamp": "2023-07-30T12:30:45Z"
            },
            {
              "username": "user2",
              "comment": "I enjoyed watching this.",
              "timestamp": "2023-07-30T14:15:22Z"
            }
          ]
        }
```
### comments endpoint
- POST /api/comments

Submits a new comment for a specific video.

    URL Params
    None

    Data Params


```
{
  "videoId": "video_id",
  "username": "user3",
  "comment": "Nice video!"
}
```
Headers
Content-Type: application/json

Success Response

    Code: 201
    Content: None

## how-to-run-locally
1. clone this repository
2. run command 'npm install'
 (make sure the downloaded all the required dependencies) 
 ```
 npm install express body-parser mongoose nodemon dotenv
 ```
3. configure the .env file, change the database URL using DB_URL variable
4. run 'npm run dev'
5. access the available endpoints through 'localhost:3000/v1' with your preferred API cline (postman, insomnia, curl, etc)