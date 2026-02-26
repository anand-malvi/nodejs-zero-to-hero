/**

Node.js API-Oriented Learning Roadmap (Post-Foundation)
Start Date: Wednesday, 17 December
Daily Time: 6 Hours
Working Days: Monday–Friday only

======================================================

WEEK 1 – Node.js Internals + Core APIs
(17 Dec – 19 Dec)

Day 1 – Wednesday (17 Dec)
├── process object
│   ├── process.env
│   ├── process.argv
│   ├── process.exit()
│   ├── process.on()
│   └── process.memoryUsage()
│
├── Globals
│   ├── __dirname
│   ├── __filename
│   └── global
│
├── Buffer
│
└── Task
    └── CLI script using process + globals

Day 2 – Thursday (18 Dec)
├── fs (Advanced)
│   ├── fs.promises
│   ├── fs.stat()
│   ├── fs.mkdir()
│   ├── fs.readdir()
│   ├── fs.unlink()
│   └── fs.watch()
│
└── Task
    └── File-based CRUD utility

Day 3 – Friday (19 Dec)
├── Streams
│   ├── Readable
│   ├── Writable
│   ├── Duplex
│   ├── Transform
│   └── pipe()
│
└── Task
    └── Large file stream processor

======================================================

WEEK 2 – Path, Crypto, HTTP, Express Core
(22 Dec – 26 Dec)

Day 4 – Monday (22 Dec)
├── path
│   ├── join()
│   ├── resolve()
│   ├── basename()
│   └── extname()
│
├── crypto
│   ├── randomBytes()
│   ├── createHash()
│   └── createHmac()
│
└── Task
    └── Password hashing utility

Day 5 – Tuesday (23 Dec)
└── Mini Project
    └── File System Service
        ├── Streams
        ├── Crypto
        └── Process handling

Day 6 – Wednesday (24 Dec)
├── http module
│   ├── http.createServer()
│   ├── req.url
│   ├── req.method
│   ├── req.headers
│   ├── res.write()
│   └── res.end()
│
└── Task
    └── Raw HTTP REST server

Day 7 – Thursday (25 Dec)
├── Express Basics
│   ├── express()
│   ├── app.listen()
│   ├── app.use()
│   └── app.set()

Day 8 – Friday (26 Dec)
├── Routing
│   ├── app.get()
│   ├── app.post()
│   ├── app.put()
│   ├── app.patch()
│   ├── app.delete()
│   └── express.Router()
│
└── Task
    └── Modular routing setup

======================================================

WEEK 3 – Middleware, REST, Authentication
(29 Dec – 2 Jan)

Day 9 – Monday (29 Dec)
├── Middleware
│   ├── Built-in middleware
│   ├── Custom middleware
│   ├── Error middleware
│   └── next()
│
└── Task
    └── Logger + auth middleware

Day 10 – Tuesday (30 Dec)
└── Mini Project
    └── Express API Skeleton
        ├── Router
        ├── Middleware pipeline
        └── Central error handler

Day 11 – Wednesday (31 Dec)
├── REST API Standards
│   ├── HTTP status codes
│   ├── REST conventions
│   ├── Pagination
│   ├── Filtering
│   └── Sorting

Day 12 – Thursday (1 Jan)
├── Validation
│   ├── Body validation
│   ├── Params validation
│   └── Query validation

Day 13 – Friday (2 Jan)
├── Authentication
│   ├── bcrypt.hash()
│   ├── bcrypt.compare()
│   ├── jwt.sign()
│   ├── jwt.verify()
│   └── jwt.decode()

======================================================

WEEK 4 – Authorization, Database, Files, Jobs
(5 Jan – 9 Jan)

Day 14 – Monday (5 Jan)
├── Authorization
│   ├── Auth middleware
│   ├── Role-based checks
│   └── Permission guards

Day 15 – Tuesday (6 Jan)
└── Mini Project
    └── Auth Service
        ├── Register
        ├── Login
        ├── JWT protection
        └── Role checks

Day 16 – Wednesday (7 Jan)
├── Database Core
│   ├── Connections
│   ├── Schemas
│   ├── CRUD
│   └── Indexes

Day 17 – Thursday (8 Jan)
├── Advanced DB
│   ├── Pagination queries
│   ├── Aggregations
│   └── Transactions

Day 18 – Friday (9 Jan)
├── File Uploads
│   ├── multipart/form-data
│   ├── File validation
│   └── Storage handling

======================================================

WEEK 5 – Jobs, Security, Testing, Production
(12 Jan – 21 Jan)

Day 19 – Monday (12 Jan)
├── Background Jobs
│   ├── EventEmitter
│   ├── Queues
│   └── Cron jobs

Day 20 – Tuesday (13 Jan)
└── Mini Project
    └── Profile Service
        ├── DB CRUD
        ├── File upload
        └── Background job

Day 21 – Wednesday (14 Jan)
├── Logging
│   ├── console
│   ├── winston
│   └── morgan

Day 22 – Thursday (15 Jan)
├── Testing
│   ├── Unit tests
│   ├── Integration tests
│   └── API tests

Day 23 – Friday (16 Jan)
├── Security
│   ├── CORS
│   ├── Helmet
│   ├── Rate limiting
│   └── Input sanitization

Day 24 – Monday (19 Jan)
├── Performance
│   ├── Caching
│   ├── Async optimization
│   └── DB indexing

Day 25 – Tuesday (20 Jan)
├── Production
│   ├── PM2
│   ├── Graceful shutdown
│   └── Production configs

Day 26 – Wednesday (21 Jan)
└── READY STATE
    └── Start Matrimonial Management System (API-only)

======================================================

 
*/