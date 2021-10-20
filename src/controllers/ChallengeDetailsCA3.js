import Model from '../models/model';

const LearningDetailsModel = new Model('vwChallengeDetailsCA3');
const url = require('url');

export const ChallengeQuestionsCA3 = async (req, res) => {
  try {
    let data = '';
    const queryObject = url.parse(req.url, true).query;

      data = await LearningDetailsModel.select('id, challengelevelid, word, answer, showMultiMorfeem, levelid, challengeid, feedbackType, studentAnswer, studentCorrect, AnswerExplanation', queryObject);
    res.status(200).json({ LearningQuestions: data });
  } catch (err) {
    res.status(200).json({ LearningQuestions: err.stack });
  }
};
