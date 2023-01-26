package com.example.backend.service;


import com.example.backend.models.Event;
import com.example.backend.repo.EventRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventService {

    private final EventRepo eventRepo;

    @Autowired
    public EventService(EventRepo eventRepo) {
        this.eventRepo = eventRepo;
    }

    public List<Event> getAllEvents(){
        return eventRepo.findAll();
    }

    public Event saveEvent(Event event){
        Event newEvent= new Event(
                event.id(),
                event.name(),
                event.description()
        );
        return eventRepo.save(newEvent);
    }

    public void deleteById(String id){
        eventRepo.deleteById(id);
    }

    public Event getEventById(String id) {
        return eventRepo.findById(id).orElseThrow();
    }
}
