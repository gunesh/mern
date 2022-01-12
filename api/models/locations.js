/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('locations', {
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'status'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at'
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement : true,
      primaryKey: true,
      field: 'id'
    },
    city: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'city'
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
    },
    state: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'state'
    },
    country: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'country'
    }
  }, {
    tableName: 'locations'
  });
};
