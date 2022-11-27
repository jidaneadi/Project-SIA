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
              id_angkatan : {
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
              jns_kelamin : {
                type : DataTypes.ENUM,
                values : ['laki-laki', 'perempuan'],
                defaultValues : 'laki-laki',
                allowNull : false
              }, 
              email : {
                type : DataTypes.STRING,
                allowNull : false
              },
              pass : {
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