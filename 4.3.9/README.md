## Registration
```
POST https://blog.kata.academy/api/users
POST /api/users HTTP/1.1
Content-Type: application/json
User-Agent: PostmanRuntime/7.29.2
Accept: */*
Host: blog.kata.academy
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Content-Length: 116
 
{
  "user": {
    "username": "serafim123",
    "email": "b20012011@yandex.ru",
    "password": "852852"
  }
}
 
HTTP/1.1 200 OK
Server: nginx/1.18.0 (Ubuntu)
Date: Wed, 19 Oct 2022 12:50:42 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 278
Connection: keep-alive
X-Powered-By: Express
Access-Control-Allow-Origin: *
Vary: X-HTTP-Method-Override
ETag: W/"116-xkJJLWllGzBVuXvqe2vJdQ"
 
{
  "user": {
    "username":"serafim123",
    "email":"b20012011@yandex.ru",
    "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGZkYWIxM2NmNzA1MWIwMDgyYjExNCIsInVzZXJuYW1lIjoic2VyYWZpbTEyMyIsImV4cCI6MTY3MTM2NzQ4NywiaWF0IjoxNjY2MTgzNDg3fQ.M2XcD5bB2Y4W6SLo6cKc8cIiodZPUnnYJUMgAGFLmqw"
  }
}
```
## Login
```
POST https://blog.kata.academy/api/users/login
POST /api/users/login HTTP/1.1
Content-Type: application/json
User-Agent: PostmanRuntime/7.29.2
Accept: */*
Host: blog.kata.academy
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Content-Length: 85
 
{
  "user": {
    "email": "b20012011@yandex.ru",
    "password": "852852"
  }
}
 
HTTP/1.1 200 OK
Server: nginx/1.18.0 (Ubuntu)
Date: Wed, 19 Oct 2022 12:44:47 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 278
Connection: keep-alive
X-Powered-By: Express
Access-Control-Allow-Origin: *
Vary: X-HTTP-Method-Override
ETag: W/"116-g/CsH6nh4UxfSNE1kTxSPw"
 
{
  "user: {
    "username":"serafim123",
    "email":"b20012011@yandex.ru",
    "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGZkYWIxM2NmNzA1MWIwMDgyYjExNCIsInVzZXJuYW1lIjoic2VyYWZpbTEyMyIsImV4cCI6MTY3MTM2NzQ4NywiaWF0IjoxNjY2MTgzNDg3fQ.M2XcD5bB2Y4W6SLo6cKc8cIiodZPUnnYJUMgAGFLmqw"
   }
}
```
## Get User
```
GET https://blog.kata.academy/api/user
GET /api/user HTTP/1.1
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGZkYWIxM2NmNzA1MWIwMDgyYjExNCIsInVzZXJuYW1lIjoic2VyYWZpbTEyMyIsImV4cCI6MTY3MTM2NzQ4NywiaWF0IjoxNjY2MTgzNDg3fQ.M2XcD5bB2Y4W6SLo6cKc8cIiodZPUnnYJUMgAGFLmqw
User-Agent: PostmanRuntime/7.29.2
Accept: */*
Host: blog.kata.academy
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
 
HTTP/1.1 200 OK
Server: nginx/1.18.0 (Ubuntu)
Date: Wed, 19 Oct 2022 12:49:14 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 278
Connection: keep-alive
X-Powered-By: Express
Access-Control-Allow-Origin: *
ETag: W/"116-tPxP8/lYH1OUUyWwifRWbw"
 
{
  "user": {
    "username":"serafim123",
    "email":"b20012011@yandex.ru",
    "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGZkYWIxM2NmNzA1MWIwMDgyYjExNCIsInVzZXJuYW1lIjoic2VyYWZpbTEyMyIsImV4cCI6MTY3MTM2Nzc1NCwiaWF0IjoxNjY2MTgzNzU0fQ.2_iUOVA3YyNcpSfaDKDmBkXVP3-V4WfW5aXcckg6dNA"
  }
}
```
