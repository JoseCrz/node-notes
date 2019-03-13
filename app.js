const chalk = require('chalk')

const command = process.argv[2]

if (command === 'new') {
    console.log('Creating new note...')
} else if (command === 'remove') {
    console.log('Removing note...')
} else {
    console.log(chalk.bgRed('Not a valid command.'))
}


