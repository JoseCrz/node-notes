const chalk = require('chalk')
const yargs = require('yargs')
const utils = require('./utils')

//---------<Configure yargs commands>----------

yargs.command({
    command: 'create',
    describe: '-> Creates a new note.',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        utils.createNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'delete',
    describe: '-> Deletes a note.',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        utils.deleteNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: '-> Lists all notes.',
    handler: function () {
        utils.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: '-> Reads the selected note.',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        utils.readNote(argv.title) 
    }
})

yargs.parse()

