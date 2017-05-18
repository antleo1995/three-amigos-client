'use strict'

const config = require('../config')
const store = require('../store')

const onGetSurveys = () => {
  console.log('getUserHives Called')
  return $.ajax({
    url: config.apiOrigin + '/surveys',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token}
  })
}

const onGetSingleSurvey = (id) => {
  console.log('onGetSingleSurvey called')
  return $.ajax({
    url: config.apiOrigin + '/surveys/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token}
  })
}

const onGetSurveyQuestions = (data) => {
  console.log('get Survey questions')
  return $.ajax({
    url: config.apiOrigin + '/questionsbysurvey',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
      'Content-type': 'application/json'
    },
    data
  })
}

const onCreateSurvey = (dataIn) => {
  console.log('onCreateSurvey data: ', dataIn)
  console.log('store.user.token ', store.user.token)
  return $.ajax({
    url: config.apiOrigin + '/surveys',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token},
    data:
    {
      'surveySchema': {
        'name': dataIn,
        'url': 'null'
      }
    }
  })
}

const onDeleteSurvey = (data) => {
  console.log('onDeleteSurvey Called data:', data)
  return $.ajax({
    url: config.apiOrigin + '/surveys/' + data.deleteId.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token}
  })
}
const onUpdateSurvey = (data) => {
  console.log('onUpdateSurvey Called data:', data)
  return $.ajax({
    url: config.apiOrigin + '/surveys/' + data.survey.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token},
    data
  })
}
const onCreateQuestion = (question, questionNum, surveyID) => {
  return $.ajax({
    url: config.apiOrigin + '/questions',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token},
    data: {
      'question': {
        'question': question,
        'questionNumber': questionNum,
        '_survey': surveyID
      }
    }
  })
}
// question, questionNum, surveyID
const onDeleteQuestion = (data) => {
  console.log('onDeleteQuestion data: ', data)
  console.log('store.user.token ', store.user.token)
  return $.ajax({
    url: config.apiOrigin + '/questions/' + data.deleteId.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token}
  })
}
  // return $.ajax({
  //   url: config.apiOrigin + '/surveys',
  //   method: 'POST',
  //   headers: {
  //     'Authorization': 'Token token=' + store.user.token,
  //     'Content-Type': 'application/json'
  //   },
  //   data
  // })

module.exports = {
  onGetSurveys,
  onCreateSurvey,
  onDeleteSurvey,
  onUpdateSurvey,
  onGetSurveyQuestions,
  onCreateQuestion,
  onDeleteQuestion,
  onGetSingleSurvey
}
