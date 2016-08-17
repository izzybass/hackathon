var currencyConverter = require('ecb-exchange-rates');

var settings = {};
settings.fromCurrency = "GBP";
settings.toCurrency = "USD";
settings.accuracy = 10;

currencyConverter.getExchangeRate(settings , function(data){
  console.log(JSON.stringify(data));
});


var app = express();
app.listen(8000);
app.get('/', function(request, response){
  console.log("Hello World");
});