var app = angular.module('neuf_barre', ['ngRoute', 'ngLocalize']);

function startTyped(values) {

    $("#typed-intro").typed('reset');
	    
	    $("#typed-intro").typed({
	        strings: values,
	        // stringsElement: $('#typed-intro-template'),
	        typeSpeed: 150, // typing speed
	        backDelay: 150, // pause before backspacing
	        backSpeed: 75,
	        loop: true, // loop on or off (true or false)
	        loopCount: false, // number of loops, false = infinite
	        showCursor: true,
	        cursorChar: "_",

	    });
    }


app.value('localeConf', {
    basePath: 'lang',
    defaultLocale: 'fr-FR',
    sharedDictionary: 'common',
    fileExtension: '.lang.json',
    persistSelection: true,
    cookieName: 'COOKIE_LOCALE_LANG',
    observableAttrs: new RegExp('^data-(?!ng-|i18n)'),
    delimiter: '::'
});

app.value('localeSupported', [
    'en-US',
    'fr-FR',
    'jp-JP'
])


/* Controllers */
// app.controller('MainCtrl', function ($scope, $location, locale/*, localeEvents*/) {
app.controller('MainCtrl', function ($scope, $location, locale) {

	/*$scope.strings = {};
	locale.ready('common').then(function() {
		$scope.strings.name = locale.getString('common.name');
	});*/

	$scope.locale = locale;
	// $scope.setLocale = $scope.locale.setLocale;


	$scope.setLocale = function Test(loc) {
		$scope.locale.setLocale(loc);

		// $scope.locale.setLocale = $scope.locale.getLocale();
		// $scope.setLocale = loc;
		console.log("Take from JSON:" + $scope.locale);
		console.log("Take from JSON:" + locale.getString('common.about', false));
		var line1 = $scope.locale.getString('common.typed-line-1');
		var line2 = $scope.locale.getString('common.typed-line-2');
		var line3 = $scope.locale.getString('common.typed-line-3');
		var typedValues = [line1, line2, line3];
		
		var typedValue = [];
		typedValue['jp-JP'] = ["おばんざい", "家庭料理", "多国籍料理"];
	    typedValue['fr-FR'] = ["Cuisine JP", "Cuisine FR", "Espace"];
	    typedValue['en-US'] = ["Japanese", "Western", "Espace"];

		startTyped(typedValue[$scope.locale.getLocale()]);
	}

	$scope.setLocale('jp-JP');
	
	
	/*$scope.$on(localeEvents.localeChanges, function() {
		locale.ready('common').then(function(){
			$scope.strings.name = locale.getString('common.name');
		})
	});*/

	$scope.setRoute = function(route) {
		$location.path(route);
	};

});

$(function(){

	// v3.1.0
	//Docs at http://simpleweatherjs.com
	$(document).ready(function() {
	  $.simpleWeather({
	    location: 'Tokyo, Japan',
	    woeid: '',
	    unit: 'c',
	    success: function(weather) {
	      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
	      html += '<ul><li>'+weather.city+'</li>';
	      // html += '<li class="currently">'+weather.currently+'</li>';
	      // html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
	  
	      $("#weather").html(html);
	    },
	    error: function(error) {
	      $("#weather").html('<p>'+error+'</p>');
	    }
	  });
	});

    console.log('JS Starting');
    // startTyped(jpValues);;

    // caroussel
	$('.frecchou').slick({
		  centerMode: true,
		  centerPadding: '170px',
		  slidesToShow: 1,
		  responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '40px',
		        slidesToShow: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '40px',
		        slidesToShow: 1
		      }
		    }
		  ]
		});
  
});