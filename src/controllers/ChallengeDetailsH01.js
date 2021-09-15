import Model from '../models/model';

const LearningDetailsModel = new Model('vwChallengeDetailsH01');

export const ChallengeQuestionsH01 = async (req, res) => {
  try {
    let { ChallengeID } = req.query;
    let data = '';
    if (ChallengeID) {
      ChallengeID = `'${ChallengeID}'`;
      data = await LearningDetailsModel.select('id, challengelevelid, wordlist, answerlist, levelid, challengeid,feedbackType,studentAnswer, studentCorrect', 'challengelevelid', ChallengeID);
    } else {
      data = await LearningDetailsModel.select('id, challengelevelid, wordlist, answerlist, levelid, challengeid,feedbackType,studentAnswer, studentCorrect');
    }
    res.status(200).json({ LearningQuestions: data });
  } catch (err) {
    res.status(200).json({ LearningQuestions: err.stack });
  }
};
