/*
    ==> create a small HTTP server using the http module
    ==> It should be assigned to the variable app and this one must be exported
    ==> The HTTP server should listen on port 1245
    ==> It should return plain text
    ==> When the URL path is /, it should display Hello Holberton School! in the page body
    ==> [
        When the URL path is /students, 
        it should display This is the list of our students followed by the same content as the file 3-read_file_async.js (with and without the database) - the name of the database must be passed as argument of the file
    ]
    ==> CSV file can contain empty lines (at the end) - and they are not a valid student!
*/ 
const {createServer} = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 1245;
const app = createServer()
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';


const countStudents = (dataPath) => new Promise((resolve, reject) => {
    if (!dataPath) {
      reject(new Error('Cannot load the database'));
    }
    if (dataPath) {
      fs.readFile(dataPath, (err, data) => {
        if (err) {
          reject(new Error('Cannot load the database'));
        }
        if (data) {
          const reportParts = [];
          const fileLines = data.toString('utf-8').trim().split('\n');
          const studentGroups = {};
          const dbFieldNames = fileLines[0].split(',');
          const studentPropNames = dbFieldNames.slice(
            0,
            dbFieldNames.length - 1,
          );
  
          for (const line of fileLines.slice(1)) {
            const studentRecord = line.split(',');
            const studentPropValues = studentRecord.slice(
              0,
              studentRecord.length - 1,
            );
            const field = studentRecord[studentRecord.length - 1];
            if (!Object.keys(studentGroups).includes(field)) {
              studentGroups[field] = [];
            }
            const studentEntries = studentPropNames.map((propName, idx) => [
              propName,
              studentPropValues[idx],
            ]);
            studentGroups[field].push(Object.fromEntries(studentEntries));
          }
  
          const totalStudents = Object.values(studentGroups).reduce(
            (pre, cur) => (pre || []).length + cur.length,
          );
          reportParts.push(`Number of students: ${totalStudents}`);
          for (const [field, group] of Object.entries(studentGroups)) {
            reportParts.push([
              `Number of students in ${field}: ${group.length}.`,
              'List:',
              group.map((student) => student.firstname).join(', '),
            ].join(' '));
          }
          resolve(reportParts.join('\n'));
        }
      });
    }
  });


  const SERVER_ROUTE_HANDLERS = [
    {
      route: '/',
      handler(_, res) {
        const responseText = 'Hello Holberton School!';
  
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Content-Length', responseText.length);
        res.statusCode = 200;
        res.write(Buffer.from(responseText));
      },
    },
    {
      route: '/students',
      handler(_, res) {
        const responseParts = ['This is the list of our students'];
  
        countStudents(DB_FILE)
          .then((report) => {
            responseParts.push(report);
            const responseText = responseParts.join('\n');
            res.setHeader('Content-Type', 'text/plain');
            res.setHeader('Content-Length', responseText.length);
            res.statusCode = 200;
            res.write(Buffer.from(responseText));
          })
          .catch((err) => {
            responseParts.push(err instanceof Error ? err.message : err.toString());
            const responseText = responseParts.join('\n');
            res.setHeader('Content-Type', 'text/plain');
            res.setHeader('Content-Length', responseText.length);
            res.statusCode = 200;
            res.write(Buffer.from(responseText));
          });
      },
    },
  ];

app.on('request', (req, res) => {
    for (const routeHandler of SERVER_ROUTE_HANDLERS){
        if (routeHandler.route === req.url){
            routeHandler.handler(req, res);
            break;
        }
    }
});

app.listen(port, hostname, () => {
    process.stdout.write(`Server listening at -> http://${hostname}:${port}\n`);
});

module.exports = app;