const dataBase = require('mysql2/promise');

async function createDatabase()
{
    const connection = await dataBase.createConnection({
        host: '127.0.0.1',
        user: 'OrSN',
        password: '0000'
    });

    try
    {
        // Create the database
        await connection.query('CREATE DATABASE IF NOT EXISTS SongsDB');
        console.log('Database created successfully');
    } catch (error)
    {
        console.error('Error creating database:', error);
    }
    // Regardless of the outcome, close the connection
    finally
    {
        connection.end();
    }
}

createDatabase();
