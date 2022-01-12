/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('appSettings', {
    value: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'value'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at'
    },
    expiryDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'expiry_date'
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 'nextval(app_settings_sequence',
      primaryKey: true,
      field: 'id'
    },
    keyName: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'key_name'
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'status'
    },
    createdBy: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'cms_users',
        key: 'id'
      },
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
      references: {
        model: 'cms_users',
        key: 'id'
      },
      field: 'updated_by'
    }
  }, {
    tableName: 'app_settings'
  });
};
