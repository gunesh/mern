/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notificationSettings', {
    value: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'value'
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
      defaultValue: 'nextval(notification_settings_sequence',
      primaryKey: true,
      field: 'id'
    },
    keyNameType: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'key_name_type'
    },
    keyName: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'key_name'
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'status'
    },
    notificationScheduler: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'notification_scheduler'
    }
  }, {
    tableName: 'notification_settings'
  });
};
