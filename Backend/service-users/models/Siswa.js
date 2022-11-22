module.exports = (sequelize, DataTypes) => {
    const Siswa = sequelize.define(
        "Siswa",
        {
            id : {
                type : DataTypes.INTEGER,
                primaryKey : true,
                autoIncrement : true,
                allowNull : false
              },
              id_role : {
                type : DataTypes.INTEGER,
                allowNull : false
              },
              nisn : {
                type : DataTypes.INTEGER,
                allowNull : true
              },
              name : {
                type : DataTypes.STRING,
                allowNull : false
              }, 
              name_ortu_wali : {
                type : DataTypes.STRING,
                allowNull : false
              },
              ttl : {
                type : DataTypes.STRING,
                allowNull : false
              },
              createdAt : {
                field : "created_at",
                type : DataTypes.DATE,
                allowNull : true
              },
              updatedAt : {
                field : "updated_at",
                type : DataTypes.DATE,
                allowNull : true
              },
        },
        {
            tableName : "siswa"
        }
    );
    return Siswa
};