package models;

import org.springframework.data.annotation.Id;

import java.util.List;

public record Car(
        @Id
        String id,
        String img,
        String description,
        List<TuningPart> tuningParts
) {
}
