
(function(){

  //Create list DOM elements

  // //"film" list tag
  // //var newList = document.createElement('li');
  // newList.setAttribute("class", "film");
  // var getListParent = document.getElementById('filmList');
  // getListParent.appendChild(newList);

  // //"filmTitle" h2 tag
  // //var filmTitle = document.createElement('h2');
  // filmTitle.setAttribute("class", "filmTitle");
  // getListParent.appendChild(filmTitle);

  // //"'Planets" h3 tag
  // var planets = document.createElement('h3');
  // planets.innerHTML = "Planets";
  // getListParent.appendChild(planets);

  // //"filmPlanets" ul tag
  // var filmPlanets = document.createElement('ul');
  // filmPlanets.setAttribute("class", "filmPlanets");
  // getListParent.appendChild(filmPlanets);

  // // "planetList" li tag
  // var planetList = document.createElement('li');
  // planetList.setAttribute("class", "planetList");
  // getListParent.appendChild(planetList);

  // //"planetName" h4 tag
  // var planetName = document.createElement('h4');
  // planetName.setAttribute("class", "planetName");
  // getListParent.appendChild(planetName);



  // Getting API info
  var person4Name = new XMLHttpRequest();
  person4Name.addEventListener("load", function () {
    var myObj = JSON.parse(this.responseText);
    let person4NameBox = document.getElementById('person4Name').innerHTML = myObj.name;


    var person4HomeWorld = new XMLHttpRequest();
    person4HomeWorld.addEventListener("load", function () {
      var homeObj = JSON.parse(this.responseText);
      let person4HomeWorld = document.getElementById('person4HomeWorld').innerHTML = homeObj.name;


      var person14Name = new XMLHttpRequest();
      person14Name.addEventListener("load", function () {
        var p14Obj = JSON.parse(this.responseText);
        let person14Name = document.getElementById('person14Name').innerHTML = p14Obj.name;


        var person14Species = new XMLHttpRequest();
        person14Species.addEventListener("load", function () {
          var p14SpeciesObj = JSON.parse(this.responseText);
          let person14Species = document.getElementById('person14Species').innerHTML = p14SpeciesObj.name;


          });
          person14Species.open("GET", "http://swapi.co/api/species/1/");
          person14Species.send();

      });
      person14Name.open("GET", "http://swapi.co/api/people/14/?format=json");
      person14Name.send();

    });

    person4HomeWorld.open("GET", "http://swapi.co/api/planets/1/?format=json");
    person4HomeWorld.send();
  });

  person4Name.open("GET", "http://swapi.co/api/people/4/?format=json");
  person4Name.send();

  //Get film names
  // film list http://swapi.co/api/films/
  var getListParent = document.getElementById('filmList');
  var filmListReq = new XMLHttpRequest();
  filmListReq.addEventListener("load", function () {
    var filmListObj = JSON.parse(this.responseText);
    for (var i = 0; i < filmListObj.results.length; i++) {
      let newList = document.createElement('li');
      let filmTitle = document.createElement('h2');
      filmTitle.innerHTML = filmListObj.results[i].title;
      newList.appendChild(filmTitle);
      getListParent.appendChild(newList);
    }
  });
  filmListReq.open("GET", "http://swapi.co/api/films/?format=json");
  filmListReq.send();


})();



/* Notes:

1. Create IIFE where all asynchronous events will live
2. Assign variable to new XMLHttpRequest();
3. On that 'new' request, addEventListener to "load" and function which includes a method to parse API data : in above example => JSON.parse()
4. note: in the parse argument, there will be a responseText property (can also be: response, status)
5. set DOM element to have an innerHTML of data from API object
6. GET API data: Object.open("GET", api data in selected format (JSON, etc))
7. Set Request Header on objects that are not to be reused
8. Invoke send() function  on Object
9. Create elements using DOM for the film list dynamically
10. Pull info from API

*/


