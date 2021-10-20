import Model from '../models/model';

const challengeModel = new Model('Levels');
const url = require('url');

export const ChallengeDetails = async (req, res) => {
  try {
    const queryObject = url.parse(req.url, true).query;
    let data = '';
    data = await challengeModel.select('*', queryObject);
    res.status(200).json({ Levels: data });
  } catch (err) {
    res.status(200).json({ Levels: err.stack });
  }
};
