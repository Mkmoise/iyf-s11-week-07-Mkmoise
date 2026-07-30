const notesEntryField = document.getElementById("notes-entry-field");
const saveNotesButton = document.getElementById("save-notes-button");
const clearNotesButton = document.getElementById("clear-notes-button");

const NOTES_STORAGE_KEY = "savedNotes";

function saveNotes() {
    const notesContent = notesEntryField.value;

    localStorage.setItem(NOTES_STORAGE_KEY, notesContent);

    alert("Notes saved successfully!");
}

function loadNotes() {
    const savedNotes = localStorage.getItem(NOTES_STORAGE_KEY);

    if (savedNotes !== null) {
        notesEntryField.value = savedNotes;
    }
}

function clearNotes() {
    notesEntryField.value = "";

    localStorage.removeItem(NOTES_STORAGE_KEY);

    alert("Notes cleared successfully!");
}

saveNotesButton.addEventListener("click", saveNotes);

clearNotesButton.addEventListener("click", clearNotes);

loadNotes();
