/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  let cmsRoles = sequelize.define('cmsRoles', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 'nextval(cms_roles_sequence',
      primaryKey: true,
      field: 'id'
    },
    role: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'role'
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'status'
    },
    createdBy: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'created_by'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'created_at'
    },
    updatedBy: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'updated_by'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at'
    }
  }, {
    tableName: 'cms_roles'
  });
  cmsRoles.associate = function (models) {
    models.cmsRoles.hasOne(models.cmsUsers, { constraints: false, foreignKey: 'roleId' });

  };
  return cmsRoles;
};
