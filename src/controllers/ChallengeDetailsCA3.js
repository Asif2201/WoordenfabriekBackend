import Model from '../models/model';

const LearningDetailsModel = new Model('vwChallengeDetailsCA3');

export const ChallengeQuestionsCA3 = async (req, res) => {
  try {
    let { ChallengeID } = req.query;
    let data = '';
    if (ChallengeID) {
      ChallengeID = `'${ChallengeID}'`;
      data = await LearningDetailsModel.select('id, challengelevelid, word, answer, showMultiMorfeem, levelid, challengeid, feedbackType', 'challengelevelid', ChallengeID);
    } else {
      data = await LearningDetailsModel.select('id, challengelevelid, word, answer, showMultiMorfeem, levelid, challengeid, feedbackType');
    }
    res.status(200).json({ LearningQuestions: data });
  } catch (err) {
    res.status(200).json({ LearningQuestions: err.stack });
  }
};
