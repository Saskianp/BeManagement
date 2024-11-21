const Participant = require('../models/participant.models');
const { Op } = require('sequelize');

// Create participant
exports.createParticipant = async (req, res) => {
    const { name, email, phone } = req.body;

    try {
        const participant = await Participant.create({ name, email, phone });
        res.status(201).json({ message: 'Add Participant successfully.', data: participant });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get Participant by ID
exports.getParticipantById = async (req, res) => {
    try {
        const { id } = req.params;
        const participant = await Participant.findByPk(id);

        if (!participant) {
            return res.status(404).json({ error: "Participant not found" });
        }
        res.status(200).json({data: participant});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// List participants with search & pagination
exports.getParticipants = async (req, res) => {
    const { search = '', page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;

    try {
        const { count, rows } = await Participant.findAndCountAll({
            where: {
                name: { [Op.like]: `%${search}%` },
            },
            offset: parseInt(offset),
            limit: parseInt(limit),
        });

        res.status(200).json({ total: count, data: rows });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update participant
exports.updateParticipant = async (req, res) => {
    const { id } = req.params;
    const { name, email, phone } = req.body;

    try {
        const participant = await Participant.findByPk(id);
        if (!participant) return res.status(404).json({ error: 'Participant not found' });

        participant.name = name || participant.name;
        participant.email = email || participant.email;
        participant.phone = phone || participant.phone;
        await participant.save();
        res.status(200).json({ message: 'Updated Participant successfully.', data: participant });
        // res.status(200).json(participant);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete participant
exports.deleteParticipant = async (req, res) => {
    const { id } = req.params;

    try {
        const participant = await Participant.findByPk(id);
        if (!participant) return res.status(404).json({ error: 'Participant not found' });

        await participant.destroy();
        res.status(200).json({ message: 'Deleted Participant successfully.'});

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
