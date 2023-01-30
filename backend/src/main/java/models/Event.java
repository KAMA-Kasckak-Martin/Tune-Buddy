package models;

import org.springframework.data.annotation.Id;

public record Event(
        @Id
        String id,
        String name,
        String description

) {
}
