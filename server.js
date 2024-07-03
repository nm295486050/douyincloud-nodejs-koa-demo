const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const data = [
  { gender: 'female', weight: 'normal', age: 25, height: 165, education: "Bachelor's degree", maritalStatus: 'single', income: 'middle class', residence: 'urban', carOwnership: 'yes', houseOwnership: 'yes', smoking: 'no', drinking: 'yes' },
  // 更多数据...
];

app.post('/filter', (req, res) => {
  const filters = req.body;
  const filteredData = data.filter(item => {
    return (filters.gender ? item.gender === filters.gender : true) &&
           (filters.weight ? item.weight === filters.weight : true) &&
           (filters.minAge ? item.age >= filters.minAge : true) &&
           (filters.maxAge ? item.age <= filters.maxAge : true) &&
           (filters.minHeight ? item.height >= filters.minHeight : true) &&
           (filters.maxHeight ? item.height <= filters.maxHeight : true) &&
           (filters.education ? item.education === filters.education : true) &&
           (filters.maritalStatus ? item.maritalStatus === filters.maritalStatus : true) &&
           (filters.income ? item.income === filters.income : true) &&
           (filters.residence ? item.residence === filters.residence : true) &&
           (filters.carOwnership ? item.carOwnership === filters.carOwnership : true) &&
           (filters.houseOwnership ? item.houseOwnership === filters.houseOwnership : true) &&
           (filters.smoking ? item.smoking === filters.smoking : true) &&
           (filters.drinking ? item.drinking === filters.drinking : true);
  });
  const percentage = (filteredData.length / data.length) * 100;
  res.json({ percentage: percentage.toFixed(4) });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
