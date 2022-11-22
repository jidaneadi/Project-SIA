'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('siswa', {
      id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
      },
      id_role : {
        type : Sequelize.INTEGER,
        allowNull : false
      },
      nisn : {
        type : Sequelize.INTEGER,
        allowNull : true
      },
      name : {
        type : Sequelize.STRING,
        allowNull : false
      }, 
      name_ortu_wali : {
        type : Sequelize.STRING,
        allowNull : false
      },
      ttl : {
        type : Sequelize.STRING,
        allowNull : false
      },
      jns_kelamin : {
        type : Sequelize.ENUM,
        values : ['laki-laki', 'perempuan'],
        defaultValues : 'laki-laki',
        allowNull : false
      }, 
      email : {
        type : Sequelize.STRING,
        allowNull : false
      },
      pass : {
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

    await queryInterface.addConstraint('siswa', {
      type : 'foreign key',
      name : 'ROLE_ID',
      fields : ['id_role'],
      references : {
        table : 'role_user',
        field : 'id'
      },
      onUpdate : 'CASCADE',
      onDelete : 'CASCADE'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('siswa');
  }
};
