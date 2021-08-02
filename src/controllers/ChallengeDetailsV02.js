import Model from '../models/model';

const LearningDetailsModel = new Model('vwChallengeDetailsV02');

export const ChallengeQuestionsV02 = async (req, res) => {
  try {
    let { ChallengeID } = req.query;
    let data = '';
    if (ChallengeID) {
      ChallengeID = `'${ChallengeID}'`;
      data = await LearningDetailsModel.select('id, challengelevelid, answer, word,  levelid, challengeid, feedbackType, BeforeWord', 'challengelevelid', ChallengeID);
    } else {
      data = await LearningDetailsModel.select('id, challengelevelid,  answer, word,  levelid, challengeid,feedbackType, BeforeWord');
    }
    res.status(200).json({ LearningQuestions: data });
  } catch (err) {
    res.status(200).json({ LearningQuestions: err.stack });
  }
};
