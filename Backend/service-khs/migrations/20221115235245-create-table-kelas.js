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
      },
      id_guru : {
        type : Sequelize.INTEGER,
        allowNull : false
      },
      jumlah_siswa : {
        type : Sequelize.INTEGER,
        allowNull : false
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
