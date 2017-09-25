
(function(){


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
          person14Species.open("GET", "https://swapi.co/api/species/1/");
          person14Species.send();

      });
      person14Name.open("GET", "https://swapi.co/api/people/14/?format=json");
      person14Name.send();

    });

    person4HomeWorld.open("GET", "https://swapi.co/api/planets/1/?format=json");
    person4HomeWorld.send();
  });

  person4Name.open("GET", "https://swapi.co/api/people/4/?format=json");
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
      let planetsHead = document.createElement('h3');
      let newHopeList = document.createElement('li');

      filmTitle.setAttribute("class", "filmTitle");

      //puts film titles in to list
      filmTitle.innerHTML = filmListObj.results[i].title;

      //adds "Planets" list
      newHopeList.innerHTML = "Planets";

      //array of planets API address
      //create a variable to hold these arrays
      let planetArr = filmListObj.results[i].planets;

      newHopeList.appendChild(filmTitle);
      getListParent.appendChild(newList);
      newList.appendChild(filmTitle);
      getListParent.appendChild(newHopeList);

      //loop thru
      for (var j = 0; j < planetArr.length; j++) {

      var planetListReq = new XMLHttpRequest();
      planetListReq.addEventListener("load", function () {
        let planetListObj = JSON.parse(this.responseText);

        //planet names go here
        let planetTitle = document.createElement('ul');

        //innerHTML needs to be set to planet names
        planetTitle.innerHTML = planetListObj.name;
        newHopeList.appendChild(planetTitle);

      });
      planetListReq.open("GET", planetArr[j]);
      planetListReq.send();

      }
    }
  });

  filmListReq.open("GET", "https://swapi.co/api/films/?format=json");
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
9. Create elements using DOM for the film list dynamically & pull info from API
10.  Finally, needed to set new HTTP request INSIDE for loop.

*/


