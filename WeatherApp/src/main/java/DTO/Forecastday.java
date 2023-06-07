package DTO;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.ArrayList;
@JsonIgnoreProperties(ignoreUnknown = true)

public class Forecastday {
    public String date;
    public int date_epoch;
    public Day day;
}
