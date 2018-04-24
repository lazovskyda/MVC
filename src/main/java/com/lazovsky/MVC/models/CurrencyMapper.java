package com.lazovsky.MVC.models;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CurrencyMapper {

    @JsonProperty("Cur_Abbreviation")
    private String currencyId;
    @JsonProperty("Date")
    private String date;
    @JsonProperty("Cur_Name")
    private String currencyName;
    @JsonProperty("Cur_OfficialRate")
    private double rate;

}