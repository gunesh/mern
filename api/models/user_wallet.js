/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('userWallet', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      field: 'id'
    },
    creditedCoins: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'credited_coins'
    },
    balanceCoins: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'balance_coins'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at'
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
    creditType: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'credit_type'
    },
    creditedDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'credited_date'
    },
    expiredDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'expired_date'
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'status'
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
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'created_at'
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
    coinType: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'coin_type'
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'description'
    }
  }, {
    tableName: 'user_wallet'
  });
};
