'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('nilai', {
      id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        allowNull : true,
        autoIncrement : true,
      },
      id_mapel : {
        type : Sequelize.INTEGER,
        allowNull : false,
        foreignKey : true
      },
      id_kelas : {
        type : Sequelize.INTEGER,
        allowNull : false
      },
      id_siswa : {
        type : Sequelize.INTEGER,
        allowNull : false
      },
      tugas1 : {
        type : Sequelize.STRING,
        allowNull : true
      },
      created_at: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      updated_at: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
        allowNull: true,
      } 

    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('nilai')
  }
};
