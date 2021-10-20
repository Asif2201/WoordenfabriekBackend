import Model from '../models/model';

const LearningDetailsModel = new Model('vwChallengeDetailsH01');
const url = require('url');

export const ChallengeQuestionsH01 = async (req, res) => {
  try {
    let data = '';
    const queryObject = url.parse(req.url, true).query;

    data = await LearningDetailsModel.select('id, challengelevelid, wordlist, answerlist, levelid, challengeid,feedbackType,studentAnswer, studentCorrect, AnswerExplanation', queryObject);

    res.status(200).json({ LearningQuestions: data });
  } catch (err) {
    res.status(200).json({ LearningQuestions: err.stack });
  }
};
