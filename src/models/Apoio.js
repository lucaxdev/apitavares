const { Model, DataTypes } = require('sequelize');

class Apoio extends Model {
    static init(sequelize) {
        super.init({

            name: DataTypes.STRING,


        }, {
            sequelize,
            freezeTableName: true
        })
    }
}

module.exports = Apoio;