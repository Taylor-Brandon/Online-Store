const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Products extends Model {}

Products.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      merchant_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
         references: {
        // This is a reference to another model
        model: 'merchants',
  
        // This is the column name of the referenced model
        key: 'id',
        }
      },
      make: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      model: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      price: {
          type: DataTypes.STRING,
          allowNull: false,
      },
       serial_number: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
      },
       image: {
          type: DataTypes.STRING,
          allowNull: false,
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'products',
  }
);

module.exports = Products;