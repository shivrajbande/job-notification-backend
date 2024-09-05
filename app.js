// server.js (Node.js)
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  console.log(email,password);

  // Example login logic (replace with your own)
  if (email === 'testuser' && password === 'password') {
    res.json({ email: 'testuser', token: 'abc123' });
  } else {
    res.status(401).send('Invalid credentials');
  }
});

app.get("/",(req,res)=>{
   console.log("shivraj");
   res.send("shivraj"); 
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
