const Sequelize = require('sequelize');
const dbConfig = require('../config/database')

const User = require('../models/User');

const Catalog = require('../models/Catalog');

const Apoio = require('../models/Apoio');

const connection = new Sequelize(dbConfig);

Apoio.init(connection);

User.init(connection);

Catalog.init(connection);

module.exports = connection;