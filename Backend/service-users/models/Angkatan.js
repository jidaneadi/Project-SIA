
module.exports = (sequelize, DataTypes) => {
    const Angkatan = sequelize.define(
        "Angkatan",
        {
            id : {
                type : DataTypes.INTEGER,
                primaryKey : true,
                autoIncrement : true,
                allowNull : false
              },
              tahun_masuk : {
                type : DataTypes.INTEGER,
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
            tableName : "angkatan"
        }
    );
    return Angkatan;
};