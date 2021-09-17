import Model from '../models/model';

const LearningDetailsModel = new Model('vwChallengeDetailsV01');

export const ChallengeQuestionsV01 = async (req, res) => {
  try {
    let { ChallengeID } = req.query;
    let data = '';
    if (ChallengeID) {
      ChallengeID = `'${ChallengeID}'`;
      data = await LearningDetailsModel.select('id, challengelevelid, MorfeemList, word, MorfeemList2, BeforeWord, levelid, challengeid, feedbackType, studentAnswer, studentCorrect, AnswerExplanation', 'challengelevelid', ChallengeID);
    } else {
      data = await LearningDetailsModel.select('id, challengelevelid,  MorfeemList, word, MorfeemList2, BeforeWord, levelid, challengeid,feedbackType, studentAnswer, studentCorrect, AnswerExplanation');
    }
    res.status(200).json({ LearningQuestions: data });
  } catch (err) {
    res.status(200).json({ LearningQuestions: err.stack });
  }
};
