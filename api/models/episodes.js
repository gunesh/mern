/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  let episodes = sequelize.define('episodes', {
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'created_at'
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'description'
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      field: 'id'
    },
    episodeDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'episode_date'
    },
    episodeStartTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'episode_start_time'
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
    season: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'season'
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
    showId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'shows',
        key: 'id'
      },
      field: 'show_id'
    },
    episodeEndTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'episode_end_time'
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'status'
    }
  }, {
    tableName: 'episodes'
  });
  episodes.associate = function (models) {
    models.episodes.hasOne(models.banners, { constraints: false });
    models.episodes.hasOne(models.auctions, { constraints: false });

    models.episodes.belongsTo(models.channels, {
      onDelete: "CASCADE",
      constraints: false,
      foreignKey: {
        constraints: false,
        allowNull: false
      }
    });
    models.episodes.belongsTo(models.shows, {
      onDelete: "CASCADE",
      constraints: false,
      foreignKey: {
        constraints: false,
        allowNull: false
      }
    });

  };
  return episodes;
};
