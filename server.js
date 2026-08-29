const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Stockage temporaire en mémoire
let comptes = [];
let rapports = [];

// Routes API
app.get('/api/reports', (req, res) => res.json(rapports));

app.post('/api/reports', (req, res) => {
  rapports.push(req.body);
  res.status(201).json({ message: 'Rapport enregistré !' });
});

app.get('/api/users', (req, res) => res.json(comptes));

app.post('/api/users', (req, res) => {
  comptes.push(req.body);
  res.status(201).json({ message: 'Compte créé !' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur prêt sur le port ${PORT}`));