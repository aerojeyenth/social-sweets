(function() {
  'use strict';

  angular
    .module('socialSweets')
    .config(config);

  /** @ngInject */
  function config($logProvider, $locationProvider, $translateProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    //Enable HTML5 Url
    $locationProvider.html5Mode(true);

    //TRANSLATIONS FOR ENGLISH
    var translationsEN = {
      "COMMON": {
        "WELCOME": "Welcome to Camel Calculator",
        "INTRO": "Here you can calculate how many camels your girlfriend or boyfriend is worth. But first we need some information about the person.",
        "AGE": "Age",
        "HEIGHT": "Height",
        "HAIR_COLOR": "Hair Color",
        "HAIR_COLOR_OPTIONS":{
          "BLONDE": "Blonde",
          "BROWN": "Brown",
          "RED": "Red",
          "BLACK": "Black",
          "GREY": "Grey"
        },
        "HAIR_LENGTH": "Hair Length",
        "HAIR_LENGTH_OPTIONS":{
          "LONG":"Long",
          "MIDDLE":"Middle",
          "SHORT":"Short",
          "BALD":"Bald"
        },
        "EYE_COLOR": "Eye Color",
        "EYE_COLOR_OPTIONS":{
          "BLUE":"Blue",
          "GREEN":"Green",
          "BROWN":"Brown",
          "GREY":"Grey"
        },
        "BODY": "Body",
        "BODY_OPTIONS": {
          "THIN":"Thin",
          "SPORTY":"Sporty",
          "CHUBBY":"Chubby",
          "NORMAL":"Normal",
          "FAT":"Fat"
        },
        "CALCULATE": "Calculate",
        "CALCULATE_AGAIN": "Calculate Again",
        "CAMELS": "Camels",
        "SOCIAL": {
          "FACEBOOK": "POST ON FACEBOOK",
          "TWITTER" : "POST ON TWITTER",
          "WHATSAPP": "SEND ON WHATSAPP"
        }
      },
      "BOY": {
        "TITLE": "Boyfriend Camel Calculator",
        "BEARD": "Beard",
        "LEAD": "How many camels for your boyfriend?",
        "WORTH": "Your boy friend is worth"
      },
      "GIRL": {
        "TITLE": "Girlfriend Camel Calculator",
        "BOOB_SIZE": "Boob Size",
        "FIGURE": "Figure",
        "LEAD": "How many camels for your girlfriend?",
        "WORTH":"Your girl friend is worth"
      }
    };

    //TRANSLATIONS FOR GERMAN
    var translationsDE = {
      "COMMON": {
        "WELCOME": "Kamelrechner",
        "INTRO": "Hier kannst du den Wert deiner Freundin, deines Freundes oder natürlich von dir selbst, in Kamelen berechnen. Hierzu benötigen wir aber erst ein paar Angaben zur Person.",
        "AGE": "Alter",
        "HEIGHT": "Größe",
        "HAIR_COLOR": "Haarfarbe",
        "HAIR_COLOR_OPTIONS":{
          "BLONDE": "Blond",
          "BROWN": "Braun",
          "RED": "Rot",
          "BLACK": "Schwarz",
          "GREY": "Grau"
        },
        "HAIR_LENGTH": "Haarlänge",
        "HAIR_LENGTH_OPTIONS":{
          "LONG":"Lang",
          "MIDDLE":"Mittle",
          "SHORT":"Kurz",
          "BALD":"Glatze"
        },
        "EYE_COLOR": "Augenfarbe",
        "EYE_COLOR_OPTIONS":{
          "BLUE":"Blau",
          "GREEN":"Grun",
          "BROWN":"Braun",
          "GREY":"Grau"
        },
        "BODY": "Oberkörper",
        "BODY_OPTIONS": {
          "THIN":"Mager",
          "SPORTY":"Sportlich",
          "CHUBBY":"Molling",
          "NORMAL":"Normal",
          "FAT":"Dick"
        },
        "CALCULATE": "BERECHNEN",
        "CALCULATE_AGAIN": "NOCHMAL BERECHNEN",
        "CAMELS": "Kamele",
        "SOCIAL": {
          "FACEBOOK": "Auf FACEBOOK Posten",
          "TWITTER" : "Auf TWITTER Posten",
          "WHATSAPP": "Mit WHATSAPP Teilen"
        }
      },
      "BOY": {
        "TITLE": "Freund Kamelrechner",
        "BEARD": "Bart",
        "LEAD": "Wie viele Kamele ist dein Freund wert?",
        "WORTH": "Dein Freund ist wert"
      },
      "GIRL": {
        "TITLE": "Freundin Kamelrechner",
        "BOOB_SIZE": "Körbchengröße",
        "FIGURE": "Figur",
        "LEAD": "Wie viele Kamele ist deine Freundin wert?",
        "WORTH":"Ihre Freundin ist es wert"
      }
    };

    //TRANSLATIONS FOR SPANISH
    var translationsES = {
      "COMMON": {
        "WELCOME": "Calculadora de camellos",
        "INTRO": "Aquí puedes calcular el valor en camellos de tu pareja. Pero primero necesitamos algo de informacion sobre esa persona.",
        "AGE": "Edad",
        "HEIGHT": "Altura",
        "HAIR_COLOR": "Color del pelo",
        "HAIR_COLOR_OPTIONS":{
          "BLONDE": "Rubio",
          "BROWN": "Marron",
          "RED": "Negro",
          "BLACK": "Rojo",
          "GREY": "Gris"
        },
        "HAIR_LENGTH": "Longitud del pelo",
        "HAIR_LENGTH_OPTIONS":{
          "LONG":"Largo",
          "MIDDLE":"Medio",
          "SHORT":"Corto",
          "BALD":"Sin Pelo"
        },
        "EYE_COLOR": "Color de ojos",
        "EYE_COLOR_OPTIONS":{
          "BLUE":"Azul",
          "GREEN":"Verde",
          "BROWN":"Marrón",
          "GREY":"Gris"
        },
        "BODY": "Cuerpo",
        "BODY_OPTIONS": {
          "THIN":"Flaca",
          "SPORTY":"Deportista",
          "CHUBBY":"Regortita",
          "NORMAL":"Normal",
          "FAT":"Gorda"
        },
        "CALCULATE": "Calcular",
        "CALCULATE_AGAIN": "¿Calcular otra vez?",
        "CAMELS": "camellos",
        "SOCIAL": {
          "FACEBOOK": "Publicar en FACEBOOK",
          "TWITTER" : "Publicar en TWITTER",
          "WHATSAPP": "Publicar en WHATSAPP"
        }
      },
      "BOY": {
        "TITLE": "Freund Kamelrechner",
        "BEARD": "Barba",
        "LEAD": "¿Cuántos camellos valdría tu novio?",
        "WORTH": "Dein Freund ist wert"
      },
      "GIRL": {
        "TITLE": "Freundin Kamelrechner",
        "BOOB_SIZE": "Tamaño de los pechos",
        "FIGURE": "Figura",
        "LEAD": "¿Cuántos camellos valdría tu novia?",
        "WORTH":"Ihre Freundin ist es wert"
      }
    };


    //Angular-translate config options.
    $translateProvider.translations('en', translationsEN);
    $translateProvider.translations('de', translationsDE);
    $translateProvider.translations('es', translationsES);

    //Angular-translate setting English as a default language
    $translateProvider.preferredLanguage('en');

    //Angular-translate setting to mitigate XSS related vulnerability
    $translateProvider.useSanitizeValueStrategy('escape');

  }

})();
