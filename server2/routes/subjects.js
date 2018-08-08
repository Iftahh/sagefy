const express = require('express')

const router = express.Router()

router.get('/:subjectId', (req, res) => res.json({}))

router.get('/versions/:versionId', (req, res) => res.json({}))

router.get('/', (req, res) => res.json({}))
// TODO option to get created by userId
// TODO option to recommended subjects

router.get('/:subjectId/units', (req, res) => res.json({}))

router.get('/:subjectId/versions', (req, res) => res.json({}))

router.post('/versions', (req, res) => res.json({}))

router.post('/:subjectId/versions', (req, res) => res.json({}))

module.exports = router