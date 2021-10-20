import Model from '../models/model';

const ChallengeModel = new Model('vwChallenges');
const url = require('url');

export const Challenges = async (req, res) => {
  try {
    const queryObject = url.parse(req.url, true).query;

    let data = '';
    data = await ChallengeModel.select('*', queryObject);
    res.status(200).json({ Challenge: data });
  } catch (err) {
    res.status(200).json({ Challenge: err.stack });
  }
};
