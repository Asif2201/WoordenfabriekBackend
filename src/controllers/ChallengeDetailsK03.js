import Model from '../models/model';

const LearningDetailsModel = new Model('vwChallengeDetailsK03');

export const ChallengeQuestionsK03 = async (req, res) => {
  try {
    let { ChallengeID } = req.query;
    let data = '';
    if (ChallengeID) {
      ChallengeID = `'${ChallengeID}'`;
      data = await LearningDetailsModel.select('id, challengelevelid, Morfeem1, Morfeem2, Morfeem3,  answer1, answer2, answer3,  levelid, challengeid', 'challengelevelid', ChallengeID);
    } else {
      data = await LearningDetailsModel.select('id, challengelevelid, Morfeem1, Morfeem2, Morfeem3,  answer1, answer2, answer3,  levelid, challengeid');
    }
    res.status(200).json({ LearningQuestions: data });
  } catch (err) {
    res.status(200).json({ LearningQuestions: err.stack });
  }
};
