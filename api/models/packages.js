/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('packages', {
    totalCoins: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'total_coins'
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'status'
    },
    gratitudeCoins: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'gratitude_coins'
    },
    bonusPercentage: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'bonus_percentage'
    },
    coins: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'coins'
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      field: 'id'
    },
    packageName: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'package_name'
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
    gstPercentage: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'gst_percentage'
    },
    gstAmount: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'gst_amount'
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'price'
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
    packAmount: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'pack_amount'
    },
    pricePerUnit: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'price_per_unit'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at'
    }
  }, {
    tableName: 'packages'
  });
};
