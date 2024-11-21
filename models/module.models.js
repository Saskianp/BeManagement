const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Mentor = require('./mentor.models');

const Module = sequelize.define('Module', {
    id: { 
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        primaryKey: true 
    },
    title: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    description: { 
        type: DataTypes.TEXT 
    },
    class_module: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    mentor_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Mentor,
            key: 'id'
        }
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'modules',
    timestamps: true,
});

const ModuleContent = sequelize.define('ModuleContent', {
    id: { 
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        primaryKey: true 
    },
    module_id: { 
        type: DataTypes.INTEGER, 
        references: { 
            model: Module, 
            key: 'id' 
        } 
    },
    title: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    content: { 
        type: DataTypes.TEXT, 
        allowNull: false 
    },
}, {
    tableName: 'module_contents',
    timestamps: true,
});

// Relasi dengan ModuleContent
Module.hasMany(ModuleContent, { as: 'contents', foreignKey: 'module_id' });
// Relasi dengan Module
ModuleContent.belongsTo(Module, { as: 'module', foreignKey: 'module_id' });
// Relasi dengan Mentor
Module.belongsTo(Mentor, { as: 'mentor', foreignKey: 'mentor_id' });

module.exports = { Module, ModuleContent };
