/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('bids', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      field: 'id'
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      },
      field: 'user_id'
    },
    bidAmount: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'bid_amount'
    },
    ipAddress: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'ip_address'
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
    auctionId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'auctions',
        key: 'id'
      },
      field: 'auction_id'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'created_at'
    },
    showId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'shows',
        key: 'id'
      },
      field: 'show_id'
    },
    bidRangeMin: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'bid_range_min'
    },
    rank: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'rank'
    },
    bidTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'bid_time'
    },
    createdBy: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      },
      field: 'created_by'
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'status'
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
    bidRangeMax: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'bid_range_max'
    },
    isWon: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'is_won'
    },
    bidWonDisplayStatus: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'bid_won_display_status'
    },
    productDeliverStatus: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'product_deliver_status'
    }
  }, {
    tableName: 'bids'
  });
};
