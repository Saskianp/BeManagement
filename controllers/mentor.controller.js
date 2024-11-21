const Mentor = require('../models/mentor.models');
const { Op } = require('sequelize');

// Create a Mentor
exports.createMentor = async (req, res) => {
    const { name, email } = req.body;

    try {
        const mentor = await Mentor.create({ name, email });
        res.status(201).json({ message: 'Add Mentor successfully.', data: mentor });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get Mentor by ID
exports.getMentorById = async (req, res) => {
    try {
        const { id } = req.params;
        const mentor = await Mentor.findByPk(id);

        if (!mentor) {
            return res.status(404).json({ error: "Mentor not found" });
        }
        res.status(200).json({data: mentor});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// List mentor with search & pagination
exports.getMentor = async (req, res) => {
    const { search = '', page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;

    try {
        const { count, rows } = await Mentor.findAndCountAll({
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

// Update a Mentor
exports.updateMentor = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;
        const mentor = await Mentor.findByPk(id);
        if (!mentor) return res.status(404).json({ error: "Mentor not found" });

        mentor.name = name || mentor.name;
        mentor.email = email || mentor.email;
        await mentor.save();
        res.status(200).json({ message: 'Updated Mentor successfully.', data: mentor });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete Mentor
exports.deleteMentor = async (req, res) => {
    const { id } = req.params;

    try {
        const mentor = await Mentor.findByPk(id);
        if (!mentor) return res.status(404).json({ error: 'Mentor not found' });

        await mentor.destroy();
        res.status(200).json({ message: 'Deleted Mentor successfully.'});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

