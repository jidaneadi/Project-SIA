'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('admin', {
      id: {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
      },
      id_role : {
        type : Sequelize.INTEGER,
        allowNull : false
      },
      name : {
        type : Sequelize.STRING,
        allowNull : false
      },
      gender : {
        type : Sequelize.ENUM,
        values : ['laki-laki', 'perempuan'],
        defaultValue : 'laki-laki',
        allowNull : false
      },
      email : {
        type : Sequelize.STRING,
        allowNull : false
      },
      noHP : {
        type : Sequelize.INTEGER,
        allowNull : true
      },
      alamat : {
        type : Sequelize.STRING,
        allowNull : true
      },
      ttl : {
        type : Sequelize.STRING,
        allowNull : true
      },
    });
    
    await queryInterface.addConstraint('admin',{
      type: 'foreign key',
      name: 'USER_ROLE',
      fields: ['id_role'],
      references: {
        table: 'role_user',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('admin');
  }
};
