const express = require('express');
const { calculateMean, calculateMedian, calculateMode } = require('./calculator');

const app = express();
app.use(express.json());

// Utility to validate numbers
function validateNums(numsStr) {
  if (!numsStr) throw new Error('nums are required');

  const nums = numsStr.split(',').map(num => {
    const parsedNum = parseFloat(num);
    if (isNaN(parsedNum)) {
      throw new Error(`${num} is not a valid number.`);
    }
    return parsedNum;
  });
  return nums;
}

// route for '/' main page.
app.get('/', (req, res) => {
    res.send('Welcome to the Express Calculator! Try using /mean, /median, or /mode with query parameters.');
});


// Route for Mean
app.get('/mean', (req, res) => {
  try {
    const nums = validateNums(req.query.nums);
    const mean = calculateMean(nums);
    return res.json({ operation: 'mean', value: mean });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

// Route for Median
app.get('/median', (req, res) => {
  try {
    const nums = validateNums(req.query.nums);
    const median = calculateMedian(nums);
    return res.json({ operation: 'median', value: median });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

// Route for Mode
app.get('/mode', (req, res) => {
  try {
    const nums = validateNums(req.query.nums);
    const mode = calculateMode(nums);
    return res.json({ operation: 'mode', value: mode });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

module.exports = app;
