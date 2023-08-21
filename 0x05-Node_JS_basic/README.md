# 0x05. NodeJS Basics

## About
- Using Node modules
- Using Node JS modules to read files
- Use `process` object to access command line arguments and the environment
- Creating HTTP servers with Node JS and Express JS
- Using ES6 with Node JS with Babel-node
- Using `Nodemon`

## Tasks
0. Function `displayMessage` that print in `stdout` a string argument.
    - File: [0-console.js](0-console.js)

1. Scripts that prompts for user input and prints modified output that include the given input.
    - File: [1-stdin.js](1-stdin.js)

2. Function countStudents that reads **[database.csv](database.csv)** synchronously and prints out the data.
    - File: [2-read_file.js](2-read_file.js)
3. Function countStudents that reads **[database.csv](database.csv)** asynchronously and prints out the data.
    - [3-read_file_async.js](3-read_file_async.js)

4. Minimal HTTP server using Nodejs `http` module.
    - Routes:
        - `GET /`: home page.
    - File: [4-http.js](4-http.js)

5. Minimal HTTP server using Nodejs `http` module.
    - Routes:
        - `GET /`: home page
        - `GET /students`: returns list of students in every major.
    - File: [5-http.js](5-http.js)

6. Minimal `Express` HTTP server.
    - Routes:
        - `GET /`: home page.
    - File: [6-http_express.js](6-http_express.js)

7. Minimal `Express` HTTP server.
    - Routes:
        - `GET /`: home page.
        - `GET /students`: returns list of students in every major.
    - File: [7-http_express.js](7-http_express.js)

8. Minimal `Express` server.
    - Routes:
        - `GET /`: home page.
        - `GET /students`: returns list of students in every major.
        - `GET /students/:major`: returns list of students in given major. (major options: `CS` and `SWE`).
    - Files:
        - [utils.js](full_server/utils.js): retrieves data from **[database.csv](database.csv)**.
        - [AppController.js](full_server/controllers/AppController.js): `/` route controller.
        - [StudentsController.js](full_server/controllers/StudentsController.js): `/students` and `/students/:major` routes controller.
        - [index.js](full_server/routes/index.js): router module.
        - [server.js](full_server/server.js): server entry point.
