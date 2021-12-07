import express from 'express';
import {
  indexPage, userPage, LessonsPage, authenticate, me, LevelsPage,
  ChallengeDetails, Challenges, UpdateStudentAnswers, UpdateStudentLevels,
  UpdateStudentChallenges, StudentLEAnswers, ResetData, Classes, Students,
  ChallengeQuestionsAll, UpdateClass, UpdateStudent, LevelEndMessages
} from '../controllers';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.post('/login', authenticate);
indexRouter.get('/me', me);

indexRouter.get('/users', userPage);
indexRouter.get('/students', Students);
indexRouter.get('/classes', Classes);
indexRouter.get('/levelendmessages', LevelEndMessages);

indexRouter.get('/userLessons', LessonsPage);
indexRouter.get('/userLevels', LevelsPage);
indexRouter.get('/Challenges', Challenges);

indexRouter.get('/ChallengeDetails', ChallengeDetails);
indexRouter.get('/ChallengeQuestionsAll', ChallengeQuestionsAll);

indexRouter.get('/StudentLEAnswers', StudentLEAnswers);

indexRouter.post('/UpdateStudentAnswers', UpdateStudentAnswers);
indexRouter.post('/UpdateStudentLevels', UpdateStudentLevels);
indexRouter.post('/UpdateStudentChallenges', UpdateStudentChallenges);
indexRouter.post('/UpdateClass', UpdateClass);
indexRouter.post('/UpdateStudent', UpdateStudent);
indexRouter.post('/ResetData', ResetData);

export default indexRouter;
