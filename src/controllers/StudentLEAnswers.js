import Model from '../models/model';

const LearningDetailsModel = new Model('vwStudentLEAnswers');

export const StudentLEAnswers = async (req, res) => {
  try {
    let { StudentID } = req.query;
    let data = '';
    if (StudentID) {
      StudentID = `'${StudentID}'`;
      data = await LearningDetailsModel.select('ChallengeQuestionID, studentID, studentAnswer, Level_ID, LessonID, AnswerExplanation, Question', 'studentID', StudentID);
    } else {
      data = await LearningDetailsModel.select('ChallengeQuestionID, studentID, studentAnswer, Level_ID, LessonID, AnswerExplanation, Question');
    }
    res.status(200).json({ LearningQuestions: data });
  } catch (err) {
    res.status(200).json({ LearningQuestions: err.stack });
  }
};
