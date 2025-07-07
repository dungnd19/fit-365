package com.fit365.weight;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/weights")
public class WeightEntryController {
    private final WeightEntryRepository repository;

    public WeightEntryController(WeightEntryRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<WeightEntry> all() {
        return repository.findAll();
    }

    @PostMapping
    public WeightEntry create(@RequestBody WeightEntry entry) {
        return repository.save(entry);
    }
}
