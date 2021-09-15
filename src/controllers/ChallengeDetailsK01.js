import Model from '../models/model';

const LearningDetailsModel = new Model('vwChallengeDetailsK1');

export const ChallengeQuestions = async (req, res) => {
  try {
    let { ChallengeID } = req.query;
    let data = '';
    if (ChallengeID) {
      ChallengeID = `'${ChallengeID}'`;
      data = await LearningDetailsModel.select('id, challengelevelid, word, answer, levelid, challengeid,feedbackType, studentAnswer, studentCorrect', 'challengelevelid', ChallengeID);
    } else {
      data = await LearningDetailsModel.select('id, challengelevelid, word, answer, levelid, challengeid,feedbackType, studentAnswer, studentCorrect');
    }
    res.status(200).json({ LearningQuestions: data });
  } catch (err) {
    res.status(200).json({ LearningQuestions: err.stack });
  }
};
