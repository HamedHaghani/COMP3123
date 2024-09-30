const http = require('http');
//TODO - Use Employee Module here
var employees = require('./Employee');
console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 3000

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
        return;
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.write('<h1>Welcome to Lab Exercise 03</h1>');
        }

        else if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            res.writeHead(200,{'Content-Type' : 'application/json'})
            res.write(JSON.stringify(employees));
        }

        else if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            const employeeNames = employees
            .map(employee => `${employee.firstName} ${employee.lastName}`)
            .sort();
            res.writeHead(200,{'Content-Type':'application/json'});
            res.write(JSON.stringify(employeeNames));
        }

        else if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }  
            const totalSalary = employees
            .reduce((total,employee) => total + employee.Salary, 0);
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({ total_salary: totalSalary }));
    }
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
})

server.listen(3000, () => {
    console.log(`Server listening on port ${port}`);
})