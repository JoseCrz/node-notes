const fs = require('fs')
const chalk = require('chalk')

const createNote = (title, body) => {
    const notes = loadNotes()
    
    const duplicateNotes = notes.filter((notes) => notes.title === title)

    if (duplicateNotes.length > 0) {
        console.log(chalk.red('Title already taken!'))

    } else {
        const note = {
            title: title,
            body: body
        }
    
        notes.push(note)
        saveNotes(notes)

        console.log(chalk.bgGreen('Note saved!'))
    }
}

const readNote = () => {
    
}

const loadNotes = () => {
    try {
        const notesJSON = fs.readFileSync('notes.json').toString()
        const notes = JSON.parse(notesJSON)
        return notes
        
    } catch (error) {
        return []
    }
}

const saveNotes = (notes) => {
    const notesJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', notesJSON)
}

module.exports = {
    createNote: createNote,
    readNote: readNote
}