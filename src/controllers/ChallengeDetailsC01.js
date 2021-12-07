import Model from '../models/model';

const LearningDetailsModel = new Model('vwChallengeDetailsC01');
const url = require('url');

export const ChallengeQuestionsC01 = async (req, res) => {
  try {
    const queryObject = url.parse(req.url, true).query;

    let data = '';
    data = await LearningDetailsModel.select('id, challengelevelid, sentence, answer, levelid, challengeid, feedbackType, studentAnswer, studentCorrect, AnswerExplanation', queryObject);
    res.status(200).json({ LearningQuestions: data });
  } catch (err) {
    res.status(200).json({ LearningQuestions: err.stack });
  }
};
