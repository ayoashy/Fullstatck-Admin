import OverallStat from '../models/OverallStat.js';

export const getSales = async (req, res) => {
  try {
    const overallStat = await OverallStat.find();
    res.status(200).json(overallStat);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
