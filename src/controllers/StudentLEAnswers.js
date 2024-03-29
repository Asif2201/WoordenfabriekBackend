import Model from '../models/model';

const LearningDetailsModel = new Model('vwStudentLEAnswers');
const url = require('url');

export const StudentLEAnswers = async (req, res) => {
  try {
    const queryObject = url.parse(req.url, true).query;
    let data = '';
    data = await LearningDetailsModel.select('*', queryObject);
    res.status(200).json({ LearningQuestions: data });
  } catch (err) {
    res.status(200).json({ LearningQuestions: err.stack });
  }
};
