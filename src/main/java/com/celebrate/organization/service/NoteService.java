package com.celebrate.organization.service;

import com.celebrate.organization.model.Note;
import com.celebrate.organization.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NoteService {
    @Autowired
    private NoteRepository noteRepository;

    public int saveNote(Note note) {
        noteRepository.save(note);
        return 1;
    }

    public int updateNote(Note note) {
        noteRepository.save(note);
        return 2;
    }

    public List<Note> getAllNote() {
        List<Note> list = noteRepository.findAll();
        return list;
    }

    public String deleteRow(long id) {
        noteRepository.deleteById(id);
        return "Success";
    }

    public Note getNoteById(long id) {
        Optional<Note> optional = noteRepository.findById(id);
        Note note = optional.get();
        return note;
    }
}
