/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  let shows = sequelize.define('shows', {
    showImage: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'show_image'
    },
    showEndTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'show_end_time'
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
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      field: 'id'
    },
    showName: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'show_name'
    },
    showDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'show_date'
    },
    isStarted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'isstarted'
    },
    showStartTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'show_start_time'
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
    }
  }, {
    tableName: 'shows'
  });
  shows.associate = function (models) {
    models.shows.hasOne(models.auctions, { constraints: false });
  };
  return shows;
};
