module.exports = (sequelize, DataTypes) => {
    const Guru = sequelize.define(
        "Guru",
        {
            id: {
                type : DataTypes.INTEGER,
                primaryKey : true,
                autoIncrement : true,
                allowNull : false
              },
              id_role : {
                type : DataTypes.INTEGER,
                allowNull : false
              },
              nip : {
                type : DataTypes.INTEGER,
                allowNull : true
              },
              name : {
                type : DataTypes.STRING,
                allowNull : false
              },
              gender : {
                type : DataTypes.ENUM,
                values : ['laki-laki', 'perempuan'],
                defaultValue : 'laki-laki',
                allowNull : false
              },
              email : {
                type : DataTypes.STRING,
                allowNull : false
              },
              noHP : {
                type : DataTypes.INTEGER,
                allowNull : true
              },
              alamat : {
                type : DataTypes.STRING,
                allowNull : true
              },
              ttl : {
                type : DataTypes.STRING,
                allowNull : true
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
            tableName : "guru"
        }
    );
    return Guru;
};