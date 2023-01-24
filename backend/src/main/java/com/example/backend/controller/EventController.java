package com.example.backend.controller;


import com.example.backend.models.Event;
import com.example.backend.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/events")
public class EventController {

    private final EventService eventService;

    @Autowired
    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping("/{id}")
    public Event getEventById(@PathVariable String id){
        return eventService.getEventById(id);
    }

    @PostMapping("/addevent")
    public Event addEvent(@RequestBody Event event){
        return eventService.saveEvent(event);
    }
}
