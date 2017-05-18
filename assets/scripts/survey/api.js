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

const onDeleteSurvey = (id) => {
  console.log('onDeleteSurvey Called data:', id)
  return $.ajax({
    url: config.apiOrigin + '/surveys/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token}
  })
}
const onUpdateSurvey = (data, id) => {
  console.log('onUpdateSurvey Called data:', data)
  return $.ajax({
    url: config.apiOrigin + '/surveys/' + id,
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
  onCreateQuestion,
  onDeleteQuestion
}
