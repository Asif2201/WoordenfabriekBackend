import Model from '../models/model';

const url = require('url');

export const ChallengeQuestionsAll = async (req, res) => {
  try {
    const queryObject = url.parse(req.url, true).query;
    const challengtype = 'vwChallengeDetails' + queryObject.challengeType;
    const LearningDetailsModel = new Model(challengtype);
    delete queryObject.challengeType;
    let data = '';
    data = await LearningDetailsModel.select('*', queryObject);
    res.status(200).json({ LearningQuestions: data });
  } catch (err) {
    res.status(200).json({ LearningQuestions: err.stack });
  }
};
