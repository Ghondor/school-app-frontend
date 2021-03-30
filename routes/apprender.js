const express = require('express');
const router = express.Router();
const passport = require('passport');
const path = require('path');


/* GET home page. */
router.get('/', function (req, res, next) {
  // res.json({status:"success", message:"Parcel Pending API", data:{"version_number":"v1.0.0"}})
  res.render('index');
});

router.get('/pick', function (req, res, next) {
  res.render('picking');
});


router.get('/superadmin/profile', function (req, res, next) {
  res.render('superadmin/dashboard', { layout: false });
});

router.get('/superadmin/manage/levels', function (req, res, next) {
  res.render('superadmin/manageLevels', { layout: false });
});

router.get('/superadmin/teachers', function (req, res, next) {
  res.render('superadmin/teachers', { layout: false });
});

router.get('/student/profile', function (req, res, next) {
  res.render('student_profile', { layout: false });
});

router.get('/student/level', function (req, res, next) {
  res.render('student_levels', { layout: false });
});

router.get('/student/start/levels', function (req, res, next) {
  res.render('student_start_task', { layout: false });
});

router.get('/teacher', function (req, res, next) {
  res.render('teacher', { layout: false });
});

router.get('/teacher/companies', function (req, res, next) {
  res.render('companies/companies_list', { layout: false });
});

router.get('/company', function (req, res, next) {
  res.render('company', { layout: false });
});

router.get('/login', function (req, res, next) {
  res.render('login', { layout: false });
});


router.get('/teacher/create/class', function (req, res, next) {
  res.render('create_class', { layout: false });
});

router.get('/teacher/classes/list', function (req, res, next) {
  res.render('classes_list', { layout: false });
});

router.get('/teacher/classes/list/class', function (req, res, next) {
  res.render('class', { layout: false });
});

router.get('/teacher/create/level', function (req, res, next) {
  res.render('create_level', { layout: false });
});

router.get('/teacher/levels/list', function (req, res, next) {
  res.render('teacher_levels_list', { layout: false });
});

router.get('/teacher/results', function (req, res, next) {
  res.render('teacher_results', { layout: false });
});

router.get('/teacher/internship', function (req, res, next) {
  res.render('internship/internship_list', { layout: false });
});

router.get('/student/exam_info', function (req, res, next) {
  res.render('exam_info', { layout: false });
});

router.get('/student/exam_time', function (req, res, next) {
  res.render('exam_time', { layout: false });
});

router.get('/student/exam_out', function (req, res, next) {
  res.render('exam_out', { layout: false });
});

router.get('/student/exam_finish', function (req, res, next) {
  res.render('exam_finish', { layout: false });
});

router.get('/student/exam_success', function (req, res, next) {
  res.render('exam_success', { layout: false });
});

router.get('/student/exam_no_result', function (req, res, next) {
  res.render('exam_no_result', { layout: false });
});

router.get('/teacher/level/edit', function (req, res, next) {
  res.render('teacher_level_edit', { layout: false });
});

router.get('/teacher/student/edit', function (req, res, next) {
  res.render('teacher_student_edit', { layout: false });
});




module.exports = router;
