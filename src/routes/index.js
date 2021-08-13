import express from 'express';
import {
  indexPage, userPage, LessonsPage, authenticate, me, LevelsPage,
  ChallengeDetails, ChallengeQuestions, Challenges, UpdateStudentAnswers, UpdateStudentLevels,
  UpdateStudentChallenges, ChallengeQuestionsC01, ChallengeQuestionsK02, ChallengeQuestionsK03,
  ChallengeQuestionsV01, ChallengeQuestionsV02, ChallengeQuestionsH01, ChallengeQuestionsH02,
  ChallengeQuestionsH05, ChallengeQuestionsCA3, ChallengeQuestionsS01
} from '../controllers';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/users', userPage);
indexRouter.get('/userLessons', LessonsPage);
indexRouter.get('/userLevels', LevelsPage);
indexRouter.get('/Challenges', Challenges);

indexRouter.get('/ChallengeDetails', ChallengeDetails);

indexRouter.get('/ChallengeQuestions', ChallengeQuestions);
indexRouter.get('/ChallengeQuestionsC01', ChallengeQuestionsC01);
indexRouter.get('/ChallengeQuestionsK02', ChallengeQuestionsK02);
indexRouter.get('/ChallengeQuestionsK03', ChallengeQuestionsK03);
indexRouter.get('/ChallengeQuestionsV01', ChallengeQuestionsV01);
indexRouter.get('/ChallengeQuestionsV02', ChallengeQuestionsV02);
indexRouter.get('/ChallengeQuestionsH01', ChallengeQuestionsH01);
indexRouter.get('/ChallengeQuestionsH02', ChallengeQuestionsH02);
indexRouter.get('/ChallengeQuestionsH05', ChallengeQuestionsH05);
indexRouter.get('/ChallengeQuestionsCA3', ChallengeQuestionsCA3);
indexRouter.get('/ChallengeQuestionsS01', ChallengeQuestionsS01);

indexRouter.post('/login', authenticate);
indexRouter.get('/me', me);
indexRouter.post('/UpdateStudentAnswers', UpdateStudentAnswers);
indexRouter.post('/UpdateStudentLevels', UpdateStudentLevels);
indexRouter.post('/UpdateStudentChallenges', UpdateStudentChallenges);

export default indexRouter;
