const express = require('express');
const cors = require('cors');

const app = express();

// Autorise publiquement toutes les requêtes externes (CORS)
app.use(cors({ origin: '*' }));
app.use(express.json());

// Stockage temporaire en mémoire
let comptes = [];
let rapports = [];

// Route racine publique de test
app.get('/', (req, res) => {
  res.send('API Airtel ZBM est en ligne et accessible publiquement !');
});

// Routes API publiques
app.get('/api/reports', (req, res) => res.json(rapports));

app.post('/api/reports', (req, res) => {
  rapports.push(req.body);
  res.status(201).json({ message: 'Rapport enregistré avec succès !' });
});

app.get('/api/users', (req, res) => res.json(comptes));

app.post('/api/users', (req, res) => {
  comptes.push(req.body);
  res.status(201).json({ message: 'Compte créé avec succès !' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur prêt sur le port ${PORT}`));