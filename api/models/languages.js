/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  let languages = sequelize.define('languages', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      field: 'id'
    },
    languageCode: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'language_code'
    },
    languageOrder: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'language_order'
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'location'
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
    language: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'language'
    },
    languageTranslation: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'language_translation'
    },
    locationType: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'location_type'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'created_at'
    },
    updatedBy: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'updated_by'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at'
    }
  }, {
    tableName: 'languages'
  });

  languages.associate = function (models) {
    models.languages.hasOne(models.content, { constraints: false, foreignKey: 'languageId' });
    models.languages.hasOne(models.banners, { constraints: false, foreignKey: 'languageId' });
    models.languages.hasOne(models.languageTranslations, { constraints: false, foreignKey: 'languageId' });
    models.languages.hasOne(models.channels, { constraints: false, foreignKey: 'channelLanguage' });
  };

  return languages;
};
