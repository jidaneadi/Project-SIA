module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define(
        "Role",
        {
            id : {
                type : DataTypes.INTEGER,
                primaryKey : true,
                autoIncrement : true,
                allowNull : false
              },
              role : {
                type : DataTypes.ENUM,
                values : ['admin', 'guru', 'siswa'],
                defaultValue : 'guru',
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
            tableName : "role_user"
        }
    );
    return Role;
};