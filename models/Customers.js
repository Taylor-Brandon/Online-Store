const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
const bcrypt = require('bcrypt');

class Customers extends Model {

  
}

Customers.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
	 street: {
        type: DataTypes.STRING,
        allowNull: false,
    },
	 state: {
        type: DataTypes.STRING,
        allowNull: false,
    },
	 city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
	 country: {
        type: DataTypes.STRING,
        allowNull: false,
    },
	 membership: {
        type: DataTypes.STRING,
        allowNull: false,
    },
	 isMerchant: { 
	 type: DataTypes.BOOLEAN, 
	 allowNull: false, 
	 defaultValue: false,
	 },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      }, 
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'customers',
  }
);

module.exports = Customers;