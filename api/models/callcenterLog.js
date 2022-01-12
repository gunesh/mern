/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  let callcenterLog = sequelize.define('callcenterLog', {
    updatedBy: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'updated_by'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at'
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: sequelize.literal("nextval('callcenter_log_sequence')"),
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
    callStatus: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'call_status'
    },
    rescheduledTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'rescheduled_time'
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
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'created_at'
    },
    callcenterUsesrId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'cms_users',
        key: 'id'
      },
      field: 'callcenter_usesr_id'
    },
    callcenterReferenceId: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'callcenter_reference_id'
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'notes'
    }
  }, {
    tableName: 'callcenter_log'
  });
  callcenterLog.associate = function (models) {
    models.callcenterLog.belongsTo(models.users, {
      onDelete: "CASCADE",
      constraints: false
    });
  };
  return callcenterLog;
};
