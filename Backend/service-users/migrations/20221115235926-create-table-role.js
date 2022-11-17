'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('role_user', {
      id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
      },
      role : {
        type : Sequelize.ENUM,
        values : ['admin', 'guru', 'siswa'],
        defaultValue : 'guru',
        allowNull : false
      }
      });
      await queryInterface.addConstraint('role_user',{
        type : 'unique',
        fields : ['role'],
        name : 'UNIQUE_ROLE_USER'
      });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('role_user');
  }
};
