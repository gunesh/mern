/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  let userPurchases = sequelize.define('userPurchases', {
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'status'
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
        model: 'users',
        key: 'id'
      },
      field: 'updated_by'
    },
    orderNumber: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: sequelize.fn('unique_rowid'),
      field: 'order_number'
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'price'
    },
    purchaseDateTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'purchase_date_time'
    },
    coinsCredited: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'coins_credited'
    },
    invoiceLink: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'invoice_link'
    },
    transactionId: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'transaction_id'
    },
    gratitudeCoins: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'gratitude_coins'
    },
    invoiceNumber: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: sequelize.fn('unique_rowid'),
      field: 'invoice_number'
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement : true,
      primaryKey: true,
      field: 'id'
    },
    packageId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'packages',
        key: 'id'
      },
      field: 'package_id'
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      },
      field: 'user_id'
    },
    currency: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'currency'
    },
    createdBy: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'created_by'
    },
    orderStatus: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'order_status'
    },
    gatewayType: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'gateway_type'
    },
     gatewayId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'gateway_id'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at'
    }
  }, {
    tableName: 'user_purchases'
  });

  userPurchases.associate = function (models) {
    models.userPurchases.belongsTo(models.users, {
      onDelete: "CASCADE",
      constraints: false,
      foreignKey: {
        constraints: false,
        allowNull: false
      }
    });

    models.userPurchases.belongsTo(models.packages, {
      onDelete: "CASCADE",
      constraints: false,
      foreignKey: {
        constraints: false,
        allowNull: false
      }
    });

  };
return userPurchases
};
