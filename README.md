# Woorden Fabriek data serving APIs
[![Build Status](https://travis-ci.com/Asif2201/WoordenfabriekBackend.svg?token=2Eh9DL44smGsSHR2Mcmn&branch=master)](https://travis-ci.com/Asif2201/WoordenfabriekBackend)
[![Maintainability](https://api.codeclimate.com/v1/badges/cb373e25017f9055d27b/maintainability)](https://codeclimate.com/github/Asif2201/WoordenfabriekBackend/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/cb373e25017f9055d27b/test_coverage)](https://codeclimate.com/github/Asif2201/WoordenfabriekBackend/test_coverage)

required database update steps for new components
1. Create question table Level_X_ChallengesXXX_Questions (XXX = K01, K02 etc.)
2. Create view vwChallengeDetailsXXX (copy from existing view and change the fields as required)
3. Add record in Challenges table
4. Add record in Level_X_Challenges table to assign to the right level
5. Update views vwAllQuestions, vwQuestionCount to add the new table in union

Creating Backend API for the new component
1. New Controller ChallengeDetailsXXX
2. Add export entery of new controller in Index.js
3. Update Index.js to add rounte to the new controller
