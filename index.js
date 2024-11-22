const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const sequelize = require('./config/database');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userRoutes = require('./routes/auth.routes');
const participantRoutes = require('./routes/participant.routes');
const mentorRoutes = require('./routes/mentor.routes');
const moduleRoutes = require('./routes/module.routes');


const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:8100'  // Izinkan frontend dari port 8100
}));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/participant', participantRoutes);
app.use('/api/mentor', mentorRoutes);
app.use('/api/module', moduleRoutes);


// Swagger options
const swaggerOptions = {
  definition: { 
    openapi: '3.0.0', 
    info: {
      title: 'Library API Documentation',
      version: '1.0.0',
      description: 'Express Library API documentation',
    },
    servers: [
      {
        url: 'http://localhost:7000',
        description: 'Local server',
      },
    ],
  },
  apis: [
    './routes/auth.routes.js', 
    './routes/mentor.routes.js', 
    './routes/module.routes.js',
    './routes/participant.routes.js', 
    './routes/evaluation.routes.js'
  ],
};

// Initialize swagger-jsdoc
const swaggerDocs = swaggerJsdoc(swaggerOptions);

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

sequelize.sync().then(() => {
  console.log('Database connected');
}).catch((err) => {
  console.error('Unable to connect to the database:', err);
});

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
