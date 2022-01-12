/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('auctionTypes', {
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
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at'
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      auctoIncrement: true,
      primaryKey: true,
      field: 'id'
    },
    auctionType: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'auction_type'
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'status'
    }
  }, {
    tableName: 'auction_types'
  });
};
