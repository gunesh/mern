/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  let banners = sequelize.define('banners', {
    updatedBy: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'cms_users',
        key: 'id'
      },
      field: 'updated_by'
    },
    channelId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'channels',
        key: 'id'
      },
      field: 'channel_id'
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'description'
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'location'
    },
    languageId: {
      type: DataTypes.TEXT,
      allowNull: true,
      references: {
        model: 'languages',
        key: 'id'
      },
      field: 'language'
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      field: 'id'
    },
    auctionForegroundImage: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'auction_foreground_image'
    },
    displayStartTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'display_start_time'
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'status'
    },
    auctionBackgroundImage: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'auction_background_image'
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
    episodeId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'episodes',
        key: 'id'
      },
      field: 'episode_id'
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
    displayEndTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'display_end_time'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at'
    }
  }, {
    tableName: 'banners'
  });

  banners.associate = function (models) {
    models.banners.belongsTo(models.languages, {
      onDelete: "CASCADE",
      constraints: false,
      foreignKey: {
        constraints: false,
        allowNull: false
      }
    });
  };

  return banners;
};
