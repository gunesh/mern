/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  let auctions = sequelize.define('auctions', {
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at'
    },
    isstarted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'isstarted'
    },
    auctionStartTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'auction_start_time'
    },
    isended: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'isended'
    },
    auctionBidFee: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'auction_bid_fee'
    },
    auctionDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'auction_date'
    },
    totalBids: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'total_bids'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'created_at'
    },
    isproductreveal: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'isproductreveal'
    },
    auctionTypeId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'auction_types',
        key: 'id'
      },
      field: 'auction_type_id'
    },
    bidCoins: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'bid_coins'
    },
    auctionEndTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'auction_end_time'
    },
    wonUserId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'won_user_id',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    auctionBackgroundImage: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'auction_background_image'
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
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'status'
    },
    createdBy: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'created_by'
    },
    episodeId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'episodes',
        key: 'id'
      },
      field: 'episode_id'
    },
    auctionForegroundImage: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'auction_foreground_image'
    },
    auctionCode: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'auction_code'
    },
    displayStartDateTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'display_start_date_time'
    },
    iswinreveal: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'iswinreveal'
    },
    auctionCategoryId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'auction_category_id',
      references: {
        model: 'auctions_categories',
        key: 'id'
      }
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'location'
    },
    duration: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'duration'
    },
    order: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'order'
    },
    wonBidId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'won_bid_id'
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
      autoIncrement: true,
      primaryKey: true,
      field: 'id'
    },
    productId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'products',
        key: 'id'
      },
      field: 'product_id'
    }
  }, {
    tableName: 'auctions'
  });

  auctions.associate = function (models) {
    models.auctions.belongsTo(models.products, {
      onDelete: "CASCADE",
      constraints: false,
      foreignKey: {
        constraints: false,
        allowNull: false
      }
    });
    models.auctions.belongsTo(models.shows, {
      onDelete: "CASCADE",
      constraints: false,
      foreignKey: {
        constraints: false,
        allowNull: false
      },
    });
    models.auctions.belongsTo(models.episodes, {
      onDelete: "CASCADE",
      constraints: false,
      foreignKey: {
        constraints: false,
        allowNull: false
      },
    });
    models.auctions.belongsTo(models.auctionsCategories, {
      onDelete: "CASCADE",
      constraints: false,
      foreignKey: 'auctionCategoryId',
    });
    models.auctions.belongsTo(models.users, {
      onDelete: "CASCADE",
      constraints: false,
      foreignKey: 'wonUserId'
    });
    models.auctions.hasMany(models.bids, { constraints: false });
    models.auctions.hasMany(models.liveBids, { constraints: false });
  };
  return auctions;
};
