const app = require('./app');
require('dotenv').config();


const PORT = process.env.PORT || 5000;
const countryRoutes = require('./routes/index');
app.use('/api', countryRoutes);

app.listen(PORT, () => {
  console.log(`Server running in the port ${PORT}`);
});
