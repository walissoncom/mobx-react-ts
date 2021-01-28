import { observable, action } from 'mobx';
import { getNotes, postNotes } from './api';

export class NotesStore {
    @observable notes: string[] = [];

    @action
    loadNotes = () => {
        console.log('loadNotes');
        getNotes().then(notes => this.notes = notes)
    }

    @action
    saveNotes = () => {
        console.log('saveNotes');
        console.log(this.notes);
        postNotes(this.notes);
    }

    @action
    addNote = (note: string) => {
        console.log('addNote');
        this.notes.push(note)
    }
}