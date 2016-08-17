$("document").ready(function () {

        //Calling function
        reLoad();

        function reLoad(){

            // var ticker = etf[i]; 
            // for(var i =0; i<etf.length; i++){


            $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22EWA%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=", function(data) {
                
                $("#name").html("Name: "+ data.query.results.quote.Name);
                $("#ticker").html("Ticker: "+ data.query.results.quote.Symbol);

                $("#result").html("Live Price $"+ data.query.results.quote.LastTradePriceOnly);
                    $("#result").hide().fadeIn(500);
                $("#time").html("Valid Time: "+ data.query.results.quote.LastTradeTime);
                $("#change").html("Change: "+ data.query.results.quote.Change);
                $("#percent").html("Percent: "+ data.query.results.quote.ChangeinPercent);
            });

             $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22EWC%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=", function(data) {
    
                $("#name1").html("Name: "+ data.query.results.quote.Name);
                $("#ticker1").html("Ticker: "+ data.query.results.quote.Symbol);

                $("#result1").html("Live Price $"+ data.query.results.quote.LastTradePriceOnly);
                    $("#result").hide().fadeIn(500);
                $("#time1").html("Valid Time: "+ data.query.results.quote.LastTradeTime);
                $("#change1").html("Change: "+ data.query.results.quote.Change);
                $("#percent1").html("Percent: "+ data.query.results.quote.ChangeinPercent);
            });
              $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22EWG%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=", function(data) {
    
                $("#name2").html("Name: "+ data.query.results.quote.Name);
                $("#ticker2").html("Ticker: "+ data.query.results.quote.Symbol);
                $("#result2").html("Live Price $"+ data.query.results.quote.LastTradePriceOnly);
                    $("#result").hide().fadeIn(500);
                $("#time2").html("Valid Time: "+ data.query.results.quote.LastTradeTime);
                $("#change2").html("Change: "+ data.query.results.quote.Change);
                $("#percent2").html("Percent: "+ data.query.results.quote.ChangeinPercent);
            });
               $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22EWU%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=", function(data) {
    
                $("#name3").html("Name: "+ data.query.results.quote.Name);
                $("#ticker3").html("Ticker: "+ data.query.results.quote.Symbol);
                $("#result3").html("Live Price $"+ data.query.results.quote.LastTradePriceOnly);
                    $("#result").hide().fadeIn(500);
                $("#time3").html("Valid Time: "+ data.query.results.quote.LastTradeTime);
                $("#change3").html("Change: "+ data.query.results.quote.Change);
                $("#percent3").html("Percent: "+ data.query.results.quote.ChangeinPercent);
            });
                $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22EWJ%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=", function(data) {
    
                $("#name4").html("Name: "+ data.query.results.quote.Name);
                $("#ticker4").html("Ticker: "+ data.query.results.quote.Symbol);
                $("#result4").html("Live Price $"+ data.query.results.quote.LastTradePriceOnly);
                    $("#result").hide().fadeIn(500);
                $("#time4").html("Valid Time: "+ data.query.results.quote.LastTradeTime);
                $("#change4").html("Change: "+ data.query.results.quote.Change);
                $("#percent4").html("Percent: "+ data.query.results.quote.ChangeinPercent);
            });
                 $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22EWZ%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=", function(data) {
    
                $("#name5").html("Name: "+ data.query.results.quote.Name);
                $("#ticker5").html("Ticker: "+ data.query.results.quote.Symbol);
                $("#result5").html("Live Price $"+ data.query.results.quote.LastTradePriceOnly);
                    $("#result").hide().fadeIn(500);
                $("#time5").html("Valid Time: "+ data.query.results.quote.LastTradeTime);
                $("#change5").html("Change: "+ data.query.results.quote.Change);
                $("#percent5").html("Percent: "+ data.query.results.quote.ChangeinPercent);
            });
                  $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22EIDO%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=", function(data) {
    
                $("#name6").html("Name: "+ data.query.results.quote.Name);
                $("#ticker6").html("Ticker: "+ data.query.results.quote.Symbol);
                $("#result6").html("Live Price $"+ data.query.results.quote.LastTradePriceOnly);
                    $("#result").hide().fadeIn(500);
                $("#time6").html("Valid Time: "+ data.query.results.quote.LastTradeTime);
                $("#change6").html("Change: "+ data.query.results.quote.Change);
                $("#percent6").html("Percent: "+ data.query.results.quote.ChangeinPercent);
            });
                   $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22INDA%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=", function(data) {
    
                $("#name7").html("Name: "+ data.query.results.quote.Name);
                $("#ticker7").html("Ticker: "+ data.query.results.quote.Symbol);
                $("#result7").html("Live Price $"+ data.query.results.quote.LastTradePriceOnly);
                    $("#result").hide().fadeIn(500);
                $("#time7").html("Valid Time: "+ data.query.results.quote.LastTradeTime);
                $("#change7").html("Change: "+ data.query.results.quote.Change);
                $("#percent7").html("Percent: "+ data.query.results.quote.ChangeinPercent);
            });
                    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22MCHI%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=", function(data) {
    
                $("#name8").html("Name: "+ data.query.results.quote.Name);
                $("#ticker8").html("Ticker: "+ data.query.results.quote.Symbol);
                $("#result8").html("Live Price $"+ data.query.results.quote.LastTradePriceOnly);
                    $("#result").hide().fadeIn(500);
                $("#time8").html("Valid Time: "+ data.query.results.quote.LastTradeTime);
                $("#change8").html("Change: "+ data.query.results.quote.Change);
                $("#percent8").html("Percent: "+ data.query.results.quote.ChangeinPercent);
            });
                    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22EWI%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=", function(data) {
    
                $("#name9").html("Name: "+ data.query.results.quote.Name);
                $("#ticker9").html("Ticker: "+ data.query.results.quote.Symbol);
                $("#result9").html("Live Price $"+ data.query.results.quote.LastTradePriceOnly);
                    $("#result").hide().fadeIn(500);
                $("#time9").html("Valid Time: "+ data.query.results.quote.LastTradeTime);
                $("#change9").html("Change: "+ data.query.results.quote.Change);
                $("#percent9").html("Percent: "+ data.query.results.quote.ChangeinPercent);
            });
                    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22EWP%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=", function(data) {
    
                $("#name10").html("Name: "+ data.query.results.quote.Name);
                $("#ticker10").html("Ticker: "+ data.query.results.quote.Symbol);
                $("#result10").html("Live Price $"+ data.query.results.quote.LastTradePriceOnly);
                    $("#result").hide().fadeIn(500);
                $("#time10").html("Valid Time: "+ data.query.results.quote.LastTradeTime);
                $("#change10").html("Change: "+ data.query.results.quote.Change);
                $("#percent10").html("Percent: "+ data.query.results.quote.ChangeinPercent);
            });
                    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22EWQ%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=", function(data) {
    
                $("#name11").html("Name: "+ data.query.results.quote.Name);
                $("#ticker11").html("Ticker: "+ data.query.results.quote.Symbol);
                $("#result11").html("Live Price $"+ data.query.results.quote.LastTradePriceOnly);
                    $("#result").hide().fadeIn(500);
                $("#time11").html("Valid Time: "+ data.query.results.quote.LastTradeTime);
                $("#change11").html("Change: "+ data.query.results.quote.Change);
                $("#percent11").html("Percent: "+ data.query.results.quote.ChangeinPercent);
            });  
                    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22TUR%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=", function(data) {
    
                $("#name12").html("Name: "+ data.query.results.quote.Name);
                $("#ticker12").html("Ticker: "+ data.query.results.quote.Symbol);
                $("#result12").html("Live Price $"+ data.query.results.quote.LastTradePriceOnly);
                    $("#result").hide().fadeIn(500);
                $("#time12").html("Valid Time: "+ data.query.results.quote.LastTradeTime);
                $("#change12").html("Change: "+ data.query.results.quote.Change);
                $("#percent12").html("Percent: "+ data.query.results.quote.ChangeinPercent);
            });
                    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22ERUS%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=", function(data) {
    
                $("#name13").html("Name: "+ data.query.results.quote.Name);
                $("#ticker13").html("Ticker: "+ data.query.results.quote.Symbol);
                $("#result13").html("Live Price $"+ data.query.results.quote.LastTradePriceOnly);
                    $("#result").hide().fadeIn(500);
                $("#time13").html("Valid Time: "+ data.query.results.quote.LastTradeTime);
                $("#change13").html("Change: "+ data.query.results.quote.Change);
                $("#percent13").html("Percent: "+ data.query.results.quote.ChangeinPercent);
            });                                                              
                    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22EZA%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=", function(data) {
    
                $("#name14").html("Name: "+ data.query.results.quote.Name);
                $("#ticker14").html("Ticker: "+ data.query.results.quote.Symbol);
                $("#result14").html("Live Price $"+ data.query.results.quote.LastTradePriceOnly);
                    $("#result").hide().fadeIn(500);
                $("#time14").html("Valid Time: "+ data.query.results.quote.LastTradeTime);
                $("#change14").html("Change: "+ data.query.results.quote.Change);
                $("#percent14").html("Percent: "+ data.query.results.quote.ChangeinPercent);
            });
                  $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22EWL%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=", function(data) {
    
                $("#name15").html("Name: "+ data.query.results.quote.Name);
                $("#ticker15").html("Ticker: "+ data.query.results.quote.Symbol);
                $("#result15").html("Live Price $"+ data.query.results.quote.LastTradePriceOnly);
                    $("#result").hide().fadeIn(500);
                $("#time15").html("Valid Time: "+ data.query.results.quote.LastTradeTime);
                $("#change15").html("Change: "+ data.query.results.quote.Change);
                $("#percent15").html("Percent: "+ data.query.results.quote.ChangeinPercent);
            });
        setTimeout(reLoad,50000);
        };
        });


    //     function reload() {
    //         $.getJSON("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20(%22USDJPY%22)&format=json&env=store://datatables.org/alltableswithkeys&callback=", function(data) {
    //             $("#fx result").html("Change: "+ data.query.results.quote.Rate);


    //         });
    //   setTimeout(reLoad,60000000);
    //     };

    //     function reload() {
    //         $.get('https://openexchangerates.org/api/latest.json', {app_id: 'cdc05e552b504ccbbcc137f87120aa2d'}), function(data) {
    //         console.log("1 US Dollar equals " + data.rates.GBP + " British Pounds");
    //     };
    //     setTimeout(reLoad,60000000);

    // };

    var currency_input = 1;
    var currency_from = "USD"; // currency codes : http://en.wikipedia.org/wiki/ISO_4217
    var currency_to = "AUD";

    var yql_base_url = "https://query.yahooapis.com/v1/public/yql";
    var yql_query = 'select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20("'+currency_from+currency_to+'")';
    var yql_query_url = yql_base_url + "?q=" + yql_query + "&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

    $.getJSON( yql_query_url, function( data ) {
        $("#fx-AUD").html("FX Rate: " + data.query.results.rate.Rate);
        });

var currency_from = "USD"; // currency codes : http://en.wikipedia.org/wiki/ISO_4217
    var currency_to = "CAD";

    var yql_base_url = "https://query.yahooapis.com/v1/public/yql";
    var yql_query = 'select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20("'+currency_from+currency_to+'")';
    var yql_query_url = yql_base_url + "?q=" + yql_query + "&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

    $.getJSON( yql_query_url, function( data ) {
        $("#fx-CAD").html("FX Rate: " + data.query.results.rate.Rate);
        });

    var currency_from = "USD"; // currency codes : http://en.wikipedia.org/wiki/ISO_4217
    var currency_to = "EUR";

    var yql_base_url = "https://query.yahooapis.com/v1/public/yql";
    var yql_query = 'select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20("'+currency_from+currency_to+'")';
    var yql_query_url = yql_base_url + "?q=" + yql_query + "&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

    $.getJSON( yql_query_url, function( data ) {
        $(".fx-EUR").html("FX Rate: " + data.query.results.rate.Rate);
        });

    var currency_from = "USD"; // currency codes : http://en.wikipedia.org/wiki/ISO_4217
    var currency_to = "GBP";

    var yql_base_url = "https://query.yahooapis.com/v1/public/yql";
    var yql_query = 'select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20("'+currency_from+currency_to+'")';
    var yql_query_url = yql_base_url + "?q=" + yql_query + "&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

    $.getJSON( yql_query_url, function( data ) {
        $("#fx-GBP").html("FX Rate: " + data.query.results.rate.Rate);
        });

    var currency_from = "USD"; // currency codes : http://en.wikipedia.org/wiki/ISO_4217
    var currency_to = "IDR";

    var yql_base_url = "https://query.yahooapis.com/v1/public/yql";
    var yql_query = 'select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20("'+currency_from+currency_to+'")';
    var yql_query_url = yql_base_url + "?q=" + yql_query + "&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

    $.getJSON( yql_query_url, function( data ) {
        $("#fx-IDR").html("FX Rate: " + data.query.results.rate.Rate);
        });

    var currency_from = "USD"; // currency codes : http://en.wikipedia.org/wiki/ISO_4217
    var currency_to = "INR";

    var yql_base_url = "https://query.yahooapis.com/v1/public/yql";
    var yql_query = 'select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20("'+currency_from+currency_to+'")';
    var yql_query_url = yql_base_url + "?q=" + yql_query + "&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

    $.getJSON( yql_query_url, function( data ) {
        $("#fx-INR").html("FX Rate: " + data.query.results.rate.Rate);
        });

    var currency_from = "USD"; // currency codes : http://en.wikipedia.org/wiki/ISO_4217
    var currency_to = "JPY";

    var yql_base_url = "https://query.yahooapis.com/v1/public/yql";
    var yql_query = 'select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20("'+currency_from+currency_to+'")';
    var yql_query_url = yql_base_url + "?q=" + yql_query + "&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

    $.getJSON( yql_query_url, function( data ) {
        $("#fx-JPY").html("FX Rate: " + data.query.results.rate.Rate);
        });

    var currency_from = "USD"; // currency codes : http://en.wikipedia.org/wiki/ISO_4217
    var currency_to = "CNY";

    var yql_base_url = "https://query.yahooapis.com/v1/public/yql";
    var yql_query = 'select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20("'+currency_from+currency_to+'")';
    var yql_query_url = yql_base_url + "?q=" + yql_query + "&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

    $.getJSON( yql_query_url, function( data ) {
        $("#fx-CNY").html("FX Rate: " + data.query.results.rate.Rate);
        });

    var currency_from = "USD"; // currency codes : http://en.wikipedia.org/wiki/ISO_4217
    var currency_to = "BRL";

    var yql_base_url = "https://query.yahooapis.com/v1/public/yql";
    var yql_query = 'select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20("'+currency_from+currency_to+'")';
    var yql_query_url = yql_base_url + "?q=" + yql_query + "&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

        $.getJSON( yql_query_url, function( data ) {
        $("#fx-BRL").html("FX Rate: " + data.query.results.rate.Rate);
        });

    var currency_from = "USD"; // currency codes : http://en.wikipedia.org/wiki/ISO_4217
    var currency_to = "ZAR";

    var yql_base_url = "https://query.yahooapis.com/v1/public/yql";
    var yql_query = 'select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20("'+currency_from+currency_to+'")';
    var yql_query_url = yql_base_url + "?q=" + yql_query + "&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

        $.getJSON( yql_query_url, function( data ) {
        $("#fx-ZAR").html("FX Rate: " + data.query.results.rate.Rate);
        });

    var currency_from = "USD"; // currency codes : http://en.wikipedia.org/wiki/ISO_4217
    var currency_to = "TRY";

    var yql_base_url = "https://query.yahooapis.com/v1/public/yql";
    var yql_query = 'select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20("'+currency_from+currency_to+'")';
    var yql_query_url = yql_base_url + "?q=" + yql_query + "&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

        $.getJSON( yql_query_url, function( data ) {
        $("#fx-TRY").html("FX Rate: " + data.query.results.rate.Rate);
        });

    var currency_from = "USD"; // currency codes : http://en.wikipedia.org/wiki/ISO_4217
    var currency_to = "RUB";

    var yql_base_url = "https://query.yahooapis.com/v1/public/yql";
    var yql_query = 'select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20("'+currency_from+currency_to+'")';
    var yql_query_url = yql_base_url + "?q=" + yql_query + "&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

        $.getJSON( yql_query_url, function( data ) {
        $("#fx-RUB").html("FX Rate: " + data.query.results.rate.Rate);
        });                

        var currency_from = "USD"; // currency codes : http://en.wikipedia.org/wiki/ISO_4217
    var currency_to = "CHF";

    var yql_base_url = "https://query.yahooapis.com/v1/public/yql";
    var yql_query = 'select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20("'+currency_from+currency_to+'")';
    var yql_query_url = yql_base_url + "?q=" + yql_query + "&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

        $.getJSON( yql_query_url, function( data ) {
        $("#fx-CHF").html("FX Rate: " + data.query.results.rate.Rate);
        });



        






























        // function reload() {
        // $getJSON("https://ws-entry-point/data/EXR/D.EUR.JPY/ECB");


        // var fetch =function() {
        // $.ajax({
        //     url: 'http://api.fixer.io/latest?base=USD',
        //     dataType: "json",
        //     success: function(data) {
        //         console.log(data);
        //         // $("#fx-result").html("FX Rate: "+ json.quotes.USDJPY);
        //     }
            
        // })    
// $getJSON("http://api.fixer.io/latest?base=USD");   
        // $("#fx-result").html("FX Rate: " + data.query.results.rate.Rate);
        // $("#fx-change").html("Change: "+ data.query.results.rate.ChangeinPercent);
// };
// $('button').on('click', function(){
//     fetch();
// })
// };














// endpoint = 'live'
// access_key = '2d247f811ba550706951497a4c77b966';

// // get the most recent exchange rates via the "live" endpoint:
// $.ajax({
//     url: 'http://apilayer.net/api/' + endpoint + '?access_key=' + access_key,   
//     dataType: 'jsonp',
//     success: function(json) {

//         // exchange rata data is stored in json.quotes
//         $("#fx-result").html("FX Rate: "+ json.quotes.USDJPY);
        
//         // source currency is stored in json.source
//         // alert(json.source);
        
//         // timestamp can be accessed in json.timestamp
//         // alert(json.timestamp);
        
//     }
// });


// var fx = require('money');

// money.quote({symbols: [
//   'USDCAD',
//   'USDEUR',
//   'JPYUSD',
//   'TWTR',
//   'NASDAQ'
// ]}, function(err, result) {
//   if(err) console.log(err);
 
//   console.log(result);
// });