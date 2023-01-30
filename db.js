import mysql from 'mysql';



export const db= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'Abu@1706',
    database:'ticketbooking',
    dateStrings: ['DATE','DATETIME'],
    port :"3306"
})



db.connect((err) => {
    if (err) {
      console.error('Error connecting to the database: ' + err.stack);
      return;
    }
    console.log('Connected to the database as id ' + db.threadId);
  });
 