package com.celebrate.organization.controller.rest;

import com.celebrate.organization.model.Note;
import com.celebrate.organization.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/notes")
public class NoteController {
    @Autowired
    private NoteService dao;

    // @RequestMapping(path = "/add", method = RequestMethod.POST, consumes = {"application/json"})
//    @CrossOrigin
    @PostMapping("/add")
    public void save(@RequestBody Note note) {
        System.out.println("Inserting");
        dao.saveNote(note);
    }

    @CrossOrigin
    @GetMapping("/show")
    public List<Note> showAll() {
        List<Note> list = dao.getAllNote();
// System.out.println(list);
        return list;
    }

    @CrossOrigin
    @DeleteMapping("/delete/{id}")
    public void deleteData(@PathVariable("id") long id) {
        String row = dao.deleteRow(id);
        System.out.println(row);
    }

    @CrossOrigin
    @GetMapping("/notes/{id}")
    public Note getSingleNote(@PathVariable("id") long id) {
        Note note = dao.getNoteById(id);
        System.out.println(note);
        return note;
    }

    @CrossOrigin
    @PutMapping("/update")
    public void updateUser(@RequestBody Note note) {
        System.out.println("Updating" + note.getId());
        Note newNote = new Note(note.getId(), note.getTopicName(), note.getNote());
        dao.updateNote(newNote);
    }
}
