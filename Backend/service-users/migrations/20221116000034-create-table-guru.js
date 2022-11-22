'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('guru', {
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
      nip : {
        type : Sequelize.INTEGER,
        allowNull : true
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
    await queryInterface.addConstraint('guru', {
      // type : 'unique',
      // name : 'UNIQUE_USER_EMAIL',
      // fields : ['email', 'nip'],
      type: 'foreign key',
        name: 'ROLE_USER',
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
    await queryInterface.dropTable('guru');
  }
};
