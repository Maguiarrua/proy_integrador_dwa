require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const UserModel = require('./models/User');
const FavoriteModel = require('./models/Favorite');

console.log(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`);
const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
   { logging: false, native: false }
);
UserModel(sequelize);
FavoriteModel(sequelize);
const { User, Favorite } = sequelize.models;
console.log(User);
console.log(Favorite);
User.belongsToMany(Favorite, {through: "user_favorite"});
Favorite.belongsToMany(User, {through:"user_favorite"});


module.exports = {
    User,
   Favorite,
   conn: sequelize,
};
