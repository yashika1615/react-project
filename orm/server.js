const sequelize = require('sequelize');
const Sequelize = new sequelize(
    'g07',
    'root',
    'Yashika@2003', { 
        host: 'localhost',
        dialect: 'mysql'
    }
)

Sequelize.authenticate().then(() => {
    console.log('Database connected');
}).catch((err) => {
    console.error(err);
})