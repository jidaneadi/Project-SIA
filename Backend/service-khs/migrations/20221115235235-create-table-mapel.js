'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('mapel', {
      id: {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
      },
      name : {
        type : Sequelize.STRING,
        allowNull : true
      },
      id_guru : {
        type : Sequelize.INTEGER,
        allowNull : false
      }
    });

    await queryInterface.addConstraint('mapel', {
      type : 'foreign key',
      name : 'ID_Guru',
      fields : ['id_guru'],
      references: {
        table : 'guru',
        field : 'id'
      },
      onUpdate : 'CASCADE',
      onDelete : 'CASCADE'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('mapel');
  }
};
