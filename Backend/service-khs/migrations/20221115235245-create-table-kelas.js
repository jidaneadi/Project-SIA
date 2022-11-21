'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('kelas', {
      id: {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
      },
      name_class : {
        type : Sequelize.STRING,
        allowNull : true
      },
      id_ruang : {
        type : Sequelize.INTEGER,
        allowNull : false
      }
    });

    await queryInterface.addConstraint('kelas', {
      type: 'foreign key',
      name: 'RUANG_KELAS',
      fields: ['id_ruang'],
      references: {
        table: 'ruang',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('kelas');
  }
};
