import mysql from 'mysql';


const user = process.env.user
const host = process.env.hosts
const password = process.env.password
const database = process.env.database
export const db= mysql.createConnection({
    host: host,
    user: user,
    password:password,
    database:database,
    dateStrings: ['DATE','DATETIME']
})