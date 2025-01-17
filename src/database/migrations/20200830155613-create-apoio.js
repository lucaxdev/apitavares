'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      
      return queryInterface.createTable('Apoio', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull:false
        },
        name:{
          type:Sequelize.STRING(255),
          allowNull:false
        },
        created_at:{
          type: Sequelize.DATE,
          allowNull:false,
        },
        updated_at:{
          type: Sequelize.DATE,
          allowNull:false,
        }
                
      });
   
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('Apoio');
    
  }
};
