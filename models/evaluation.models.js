const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Participant = require('./participant.models');
const Module = require('./module.models');

const Evaluation = sequelize.define('Evaluation', {
    id: { 
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        primaryKey: true 
    },
    rank: { 
        type: DataTypes.INTEGER 
    },
    participant_id: { 
        type: DataTypes.INTEGER,
        references: {
            model: Participant,
            key: 'id'
        } 
    },
    module_id: { 
        type: DataTypes.INTEGER,
        references: {
            model: Module,
            key: 'id'
        } 
    },
    class: { 
        type: DataTypes.STRING,
    },
    points: { 
        type: DataTypes.INTEGER 
    },
}, {
    tableName: 'evaluations',
    timestamps: true,
});

// Relasi dengan Participant
Module.belongsTo(Participant, { as: 'participant', foreignKey: 'participant_id' });

// Relasi dengan Module
Module.belongsTo(Module, { as: 'module', foreignKey: 'module_id' });

module.exports = Evaluation;
