/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  let content = sequelize.define('content', {
    languageId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'languages',
        key: 'id'
      },
      field: 'language_id'
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'content_type'
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
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      field: 'id'
    },
    contentKey: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'content_key'
    },
    contentValue: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'content_value'
    },
    contentTitle: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'content_title'
    },
    contentValueJson: {
      type: DataTypes.JSONB,
      allowNull: true,
      field: 'content_value_json'
    },
    images: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'content_image_url'
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'content_location'
    },
    createdBy: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'created_by'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at'
    }
  }, {
    tableName: 'content'
  });
  content.associate = function (models) {
    models.content.belongsTo(models.languages, {
      onDelete: "CASCADE",
      constraints: false,
      foreignKey: {
        constraints: false,
        allowNull: false
      }
    });
  };
  return content;
};
