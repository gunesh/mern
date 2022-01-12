/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  let products = sequelize.define('products', {
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
        model: 'cms_users',
        key: 'id'
      },
      field: 'updated_by'
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    productId: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'product_id'
    },
    productName: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'product_name'
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'description'
    },
    quantity: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'quantity'
    },
    productPrice: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'product_price'
    },
    productImage: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'product_image'
    },
    productSource: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'product_source'
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
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at'
    },
    parentProductId: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'parent_product_id'
    },
    parentProductName: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'parent_product_name'
    },
    parentProductDescription: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'parent_prod_description'
    },
    productInventory: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'product_inventory'
    },
    productThumbimage: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'product_thumbimage'
    },
    salePrice: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'sale_price'
    },
    discountAmount: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'discountamount'
    },
    discountPercentage: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'discountpercentage'
    },
    shippingCharge: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'shippingcharge'
    }
  }, {
    tableName: 'products'
  });

 
  products.associate = function (models) {
    models.products.hasOne(models.auctions, { constraints: false });
    models.products.hasOne(models.orders, { constraints: false, foreignKey: 'id' });
  };
  return products;
};
