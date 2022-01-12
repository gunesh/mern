/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  let orders = sequelize.define('orders', {
    payuOrderStatus: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'payu_order_status'
    },
    bidAmount: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'bid_amount'
    },
    auctionId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'auction_id'
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'user_id'
    },
    billingAddress: {
      type: DataTypes.JSONB,
      allowNull: true,
      field: 'billing_address'
    },
    orderPlacementRequest: {
      type: DataTypes.JSONB,
      allowNull: true,
      field: 'order_placement_request'
    },
    orderPlacementResponse: {
      type: DataTypes.JSONB,
      allowNull: true,
      field: 'order_placement_response'
    },
    referenceOrderId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'reference_order_id'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at'
    },
    orderNumber: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: sequelize.fn('unique_rowid'),
      field: 'order_number'
    },
    bidId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'bid_id'
    },
    productId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'products',
        key: 'id'
      },
      field: 'product_id'
    },
    invoiceNumber: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: sequelize.fn('unique_rowid'),
      field: 'invoice_number'
    },
    updatedBy: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'updated_by'
    },
    orderStatus: {
      type: DataTypes.JSONB,
      allowNull: true,
      field: 'order_status'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'created_at'
    },
    referenceUserId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'reference_user_id'
    },
    createdBy: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'created_by'
    },
    invoiceLink: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'invoice_link'
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 'nextval(orders_sequence',
      primaryKey: true,
      field: 'id'
    },
    shippingAddress: {
      type: DataTypes.JSONB,
      allowNull: true,
      field: 'shipping_address'
    }
  }, {
    tableName: 'orders'
  });
  orders.associate = function (models) {
    models.orders.belongsTo(models.products, {
      constraints: false,
      foreignKey: 'id',
    });
  };
  return orders;
};
