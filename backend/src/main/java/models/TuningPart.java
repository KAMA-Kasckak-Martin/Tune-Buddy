package models;

import org.springframework.data.annotation.Id;

public record TuningPart(
        @Id
        String id,
        String name,
        String shopUrl
) {
}
