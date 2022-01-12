/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  let languageTranslations = sequelize.define('languageTranslations', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      field: 'id'
    },
    languageId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'languages',
        key: 'id'
      },
      field: 'language_id'
    },
    updatedBy: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'updated_by'
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
    translationKey: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'translation_key'
    },
    translationMessage: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'translation_message'
    },
    parentId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'parent_id'
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
    }
  }, {
    tableName: 'language_translations'
  });
    languageTranslations.associate = function (models) {
    models.languageTranslations.belongsTo(models.languages, {
      onDelete: "CASCADE",
      constraints: false,
      foreignKey: {
        constraints: false,
        allowNull: false
      }
    });
  };
  return languageTranslations;
};
