/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  let channels =  sequelize.define('channels', {
    channelLanguage: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'languages',
        key: 'id'
      },      
      field: 'channel_language',
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'status'
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'location'
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      field: 'id'
    },
    channelName: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'channel_name'
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
    logo: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'logo'
    },
    channelDescription: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'channel_description'
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
    }
  }, {
    tableName: 'channels'
  });

    channels.associate = function (models) {
    models.channels.belongsTo(models.languages, {
      onDelete: "CASCADE",
      constraints: false,
      foreignKey: 'channelLanguage'
    });
  };

  return channels;
};
