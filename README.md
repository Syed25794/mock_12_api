# Job API

The Jobs API allows users to create, retrieve, filter, sort and search job listings.The following tech stacks are used in building this API.

- Node.js
- Express.js
- Mongoose
- MongoDb
- dotenv

## API Endpoints

### Create a new job listing

Endpoint: `https://mock-12-api-210t.onrender.com/jobs/create`

Method: `POST`

Request Body: 
```json
{
  "company": "",
  "postedAt": "",
  "level": "",
  "role": "",
  "location": "",
  "language": "",
  "city": "",
  "contract": ""
}
```

### Get all job listings

Method: `GET`

Endpoint: `https://mock-12-api-210t.onrender.com/jpbs/all`

Body:
```json

{
  "page": 0
}
```

### Search for job listings by language
Method: `GET`
Endpoint: `https://mock-12-api-210t.onrender.com/jobs/search`
Body:
```json
{
  "page": 0,
  "language": ""
}
```


### Filter job listings by role
Method: `GET`
Endpoint: `https://mock-12-api-210t.onrender.com/jobs/filter`
Body:
```json
{
  "page": 0,
  "role": ""
}
```

### Sort job listings by postedAt
Method: `GET`
Endpoint: `https://mock-12-api-210t.onrender.com/jobs/sort`
Body:
```json
{
  "page": 0,
  "order": "asc" or "desc"
}
```
Note: All endpoints return a JSON object with a "data" key containing the requested data, and a "msg" key containing a message about the status of the request.
