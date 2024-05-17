
const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const port = 2000;

const SECRET_KEY = 'your-secret-key';

app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  // Simplified authentication check
  if (username === 'user' && password === 'pass') {
    const payload = {
      sub: username,
      name: 'John Doe',
      admin: true
    };
    
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.get('/protected', (req, res) => {
  const token = req.headers['authorization'].split(' ')[1];
  
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    res.json({ message: 'Protected content', decoded });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
