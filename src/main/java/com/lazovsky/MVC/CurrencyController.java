package com.lazovsky.MVC;


import com.lazovsky.MVC.models.Currency;

import com.lazovsky.MVC.models.CurrencyMapper;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;


import java.net.URI;
import java.util.HashMap;
import java.util.Map;

@RestController
public class CurrencyController {


    private Currency testCurrency = new Currency();

    @CrossOrigin
    @RequestMapping(value = "/api/{currencyId}", method = RequestMethod.GET)
    public CurrencyMapper showHelloWorld(@PathVariable("currencyId") String currencyId) {


        Map<String, String> params = new HashMap<>();
        params.put("currencyId", currencyId);



        try {
            RestTemplate restTemplate = new RestTemplate();
//            HttpHeaders headers = new HttpHeaders();
//            headers.add("Content-Type", "application/json");
//            headers.add("Accept", "*/*");


            //URI url = new URI("http://www.nbrb.by/API/ExRates/Rates/{currencyId}?ParamMode=2");
            String url = "http://www.nbrb.by/API/ExRates/Rates/{currencyId}?ParamMode=2";

        //    HttpEntity<String> requestEntity = new HttpEntity<String>("", headers);
            //ResponseEntity<CurrencyMapper> responseEntity = restTemplate.exchange(url, HttpMethod.GET, requestEntity, CurrencyMapper.class);
            CurrencyMapper response = restTemplate.getForObject(url, CurrencyMapper.class, params);
            //return responseEntity.getBody();
            return response;

        }catch (Exception ex){
            ex.printStackTrace();
        }

        return null;
    }


}
