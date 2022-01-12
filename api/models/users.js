/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    lastName: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'last_name'
    },
    gender: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'gender'
    },
    mobile: {
      type: DataTypes.TEXT,
      allowNull: true,
      unique: true,
      field: 'mobile'
    },
    emailNotification: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'email_notification'
    },
    updatedBy: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'updated_by'
    },
    smsPromotion: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'sms_promotion'
    },
    state: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'state'
    },
    alternateMobile: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'alternate_mobile'
    },
    inviteCodeEmail: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'invite_code_email'
    },
    loginSource: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'login_source'
    },
    defaultAddressId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'default_address_id'
    },
    createdBy: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'created_by'
    },
    enablePushNotification: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'enable_push_notification'
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: true,
      unique: true,
      field: 'email'
    },
    loginSourceId: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'login_source_id'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at'
    },
    city: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'city'
    },
    address: {
      type: DataTypes.JSONB,
      allowNull: true,
      field: 'address'
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
      autoIncrement : true,
      primaryKey: true,
      field: 'id'
    },
    firstName: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'first_name'
    },
    profilePicture: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'profile_picture'
    },
    inviteCodeSms: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'invite_code_sms'
    },
    pinCode: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'pin_code'
    },
    userLanguage: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'user_language'
    }
  }, {
    tableName: 'users'
  });
};
