'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('users', {
      id:{
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull:false,
             
      },
      
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(25),
        allowNull: true,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      datebirth: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      indication: {
        type: Sequelize.STRING(30),
        allowNull: true
      },
      rg: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      catalog1: {
        type: Sequelize.STRING(25),
        allowNull: true
      },
      catalog2: {
        type: Sequelize.STRING(25),
        allowNull: true
      },
      catalog3: {
        type: Sequelize.STRING(25),
        allowNull: true
      },
      catalog4: {
        type: Sequelize.STRING(25),
        allowNull: true
      },
      catalog5: {
        type: Sequelize.STRING(25),
        allowNull: true
      },
      catalog6: {
        type: Sequelize.STRING(25),
        allowNull: true
      },
      catalog7: {
        type: Sequelize.STRING(25),
        allowNull: true
      },
      catalog8: {
        type: Sequelize.STRING(25),
        allowNull: true
      },
      pointsupport: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      cep: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      rua: {
        type: Sequelize.STRING(25),
        allowNull: false
      },
      numero: {
        type: Sequelize.STRING(10),
        allowNull: false
      },
      complemento: {
        type: Sequelize.STRING(25),
        allowNull: true
      },
      cidade: {
        type: Sequelize.STRING(25),
        allowNull: false
      },
      estado: {
        type: Sequelize.STRING(25),
        allowNull: false
      },
      bairro: {
        type: Sequelize.STRING(25),
        allowNull: false
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull:false
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull:false
      } 
    });

  },

  down: (queryInterface, Sequelize) => {


    return queryInterface.dropTable('users');

  }
};
