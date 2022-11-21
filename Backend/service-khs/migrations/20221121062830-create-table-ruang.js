'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('ruangan', {
      id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
      },
      name : {
        type : Sequelize.STRING,
        allowNUll : false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('ruangan');
  }
};
