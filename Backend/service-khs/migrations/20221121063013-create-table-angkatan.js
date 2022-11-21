'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('angkatan',{
      id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
      },
      tahun_masuk : {
        type : Sequelize.INTEGER,
        allowNull : false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('angkatan');
  }
};
