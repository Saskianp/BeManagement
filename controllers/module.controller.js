const { Module, ModuleContent } = require('../models/module.models');
const Mentor = require('../models/mentor.models');
const { Op } = require('sequelize');


// Create a Module
exports.createModule = async (req, res) => {
    const { title, description, class_module, date, mentor_id } = req.body;

    try {
        if (!title || !description || !class_module || !date || !mentor_id) {
            return res.status(400).json({ error: "All fields are required." });
        }

        // Buat entri modul
        const module = await Module.create({ title, description, class_module, date, mentor_id });

        res.status(201).json({
            message: 'Module created successfully.',
            data: module,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Get Module by ID
exports.getModuleById = async (req, res) => {
    try {
        const { id } = req.params;
        const module = await Module.findByPk(id, {
            include: [
                {
                    model: Mentor,
                    as: 'mentor',
                    attributes: ['name']
                },
                {
                    model: ModuleContent,
                    as: 'contents',
                    attributes: ['title', 'content']
                }
            ]
        });
        
        if (!module) {
            return res.status(404).json({ error: "Module not found" });
        }
        res.status(200).json({data: module});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// List Module with search & pagination
exports.getModule = async (req, res) => {
    const { search = '', page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;

    try {
        const { count, rows: modules } = await Module.findAndCountAll({
            where: {
                title: { [Op.like]: `%${search}%` }
            },
            include: [
                {
                    model: Mentor,
                    as: 'mentor',
                    attributes: ['name']
                },
                {
                    model: ModuleContent,
                    as: 'contents', // Relasi untuk mengambil data konten
                    attributes: ['title', 'content']
                }
            ],
            limit: parseInt(limit),
            offset: parseInt(offset)
        });

        res.status(200).json({
            total: count,
            page: parseInt(page),
            totalPages: Math.ceil(count / limit),
            modules
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a Module
exports.updateModule = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, class_module, date, mentor_id } = req.body;
        
        const module = await Module.findByPk(id);
        if (!module) return res.status(404).json({ error: "Module not found" });

        module.title = title || module.title;
        module.description = description || module.description;
        module.class_module = class_module || module.class_module;
        module.date = date || module.date;
        module.mentor_id = mentor_id || module.mentor_id;
        
        await module.save();
        res.status(200).json({ message: 'Module updated successfully.', data: module });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete Module
exports.deleteModule = async (req, res) => {
    const { id } = req.params;

    try {
        const module = await Module.findByPk(id);
        if (!module) return res.status(404).json({ error: 'Module not found' });

        await module.destroy();
        res.status(200).json({ message: 'Module deleted successfully.'});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create ModuleContent
exports.createModuleContent = async (req, res) => {
    try {
        const { module_id, title, content } = req.body;

        const newContent = await ModuleContent.create({ module_id, title, content });

        res.status(201).json({ message: "Module content created successfully", content: newContent });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//Get ModuleContent By Id 
exports.getContentsByModuleId = async (req, res) => {
    try {
        const { id } = req.params;

        const contents = await ModuleContent.findAll({
            where: { module_id: id },
            attributes: ['id', 'module_id', 'title', 'content'] 
        });

        if (contents.length === 0) {
            return res.status(404).json({ error: "No contents found for this module" });
        }

        res.status(200).json({ data: contents });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get Contents 
exports.getContents = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;

    // Pastikan limit dan page adalah angka
    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);

    if (isNaN(pageNumber) || isNaN(limitNumber) || pageNumber <= 0 || limitNumber <= 0) {
        return res.status(400).json({ error: "Invalid page or limit value" });
    }

    const offset = (pageNumber - 1) * limitNumber;

    try {
        // Ambil data konten berdasarkan module_id dengan pagination
        const { count, rows: contents } = await ModuleContent.findAndCountAll({
            attributes: ['id', 'module_id', 'title', 'content'],
            limit: limitNumber,
            offset
        });

        if (contents.length === 0) {
            return res.status(404).json({ error: "No contents found for this module" });
        }

        res.status(200).json({
            total: count, // Total semua data
            page: pageNumber,
            totalPages: Math.ceil(count / limitNumber), // Total halaman
            data: contents
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


//Update ModuleContent
exports.updateModuleContent = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;

        const moduleContent = await ModuleContent.findByPk(id);
        if (!moduleContent) return res.status(404).json({ error: "Module content not found" });

        moduleContent.title = title || moduleContent.title;
        moduleContent.content = content || moduleContent.content;

        await moduleContent.save();
        res.status(200).json({ message: "Module content updated successfully", moduleContent });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//Delete ModuleContent
exports.deleteModuleContent = async (req, res) => {
    try {
        const { id } = req.params;

        const moduleContent = await ModuleContent.findByPk(id);
        if (!moduleContent) return res.status(404).json({ error: "Module content not found" });

        await moduleContent.destroy();
        res.status(200).json({ message: "Module content deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
