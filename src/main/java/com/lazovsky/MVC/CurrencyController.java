package com.lazovsky.MVC;


import com.lazovsky.MVC.models.Currency;
import com.lazovsky.MVC.models.CurrencyDto;
import com.lazovsky.MVC.models.CurrencyMapper;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.net.HttpURLConnection;
import java.net.URI;
import java.net.URL;
import java.sql.ResultSet;
import java.sql.SQLException;

@RestController
public class CurrencyController {


    private Currency testCurrency = new Currency();


    @RequestMapping("/api")
    public CurrencyMapper showHelloWorld() {

        try {
            RestTemplate restTemplate = new RestTemplate();
            HttpHeaders headers = new HttpHeaders();
            headers.add("Content-Type", "application/json");
            headers.add("Accept", "*/*");


            URI url = new URI("http://www.nbrb.by/API/ExRates/Rates/USD?ParamMode=2");


            HttpEntity<String> requestEntity = new HttpEntity<String>("", headers);
            //ResponseEntity<CurrencyMapper> responseEntity = restTemplate.exchange(url, HttpMethod.GET, requestEntity, CurrencyMapper.class);
            CurrencyMapper response = restTemplate.getForObject(url, CurrencyMapper.class);
            //return responseEntity.getBody();
            return response;

        }catch (Exception ex){
            ex.printStackTrace();
        }

        return null;
    }


}
