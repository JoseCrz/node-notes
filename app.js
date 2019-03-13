const chalk = require('chalk')
const yargs = require('yargs')

//---------<Configure yargs commands>----------

yargs.command({
    command: 'new',
    describe: 'Creates a new note.',
    handler: function () {
        console.log(chalk.yellow('Creating a new note...'))
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    handler: function () {
        console.log(chalk.yellow('Removing a note...'))
    }
})

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function () {
        console.log(chalk.yellow('Listing notes..'))
    }
})

yargs.command({
    command: 'open',
    describe: 'Opens up a note',
    handler: function () {
        console.log(chalk.yellow('Opening note...'))
    }
})

console.log(yargs.argv)

