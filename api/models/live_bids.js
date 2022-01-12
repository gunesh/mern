/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('liveBids', {
    showId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'shows',
        key: 'id'
      },
      field: 'show_id'
    },
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
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at'
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      field: 'id'
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
    userId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      },
      field: 'user_id'
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
    bidRangeMin: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'bid_range_min'
    },
    bidRangeMax: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'bid_range_max'
    },
    bidTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'bid_time'
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
    bidAmount: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'bid_amount'
    },
    rank: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'rank'
    },
    bidWonDisplayStatus: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'bid_won_display_status'
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
    bidStatusKey: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'bid_status_key'
    },
    ipAddress: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'ip_address'
    },
    isWon: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'is_won'
    },
    productDeliverStatus: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'product_deliver_status'
    }
  }, {
    tableName: 'live_bids'
  });
};
