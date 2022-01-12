/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  let auctionsCategories = sequelize.define('auctionsCategories', {
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
    auctionDescription: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'auction_description'
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      field: 'id'
    },
    auctionCategoryName: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'auction_category'
    },
    bidPoints: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'bid_points'
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
    }
  }, {
    tableName: 'auctions_categories'
  });

  auctionsCategories.associate = function (models) {
    models.auctionsCategories.hasOne(models.auctions, { constraints: false, foreignKey: 'auctionCategoryId' });

  };
  return auctionsCategories;
};
