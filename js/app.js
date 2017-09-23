
(function(){


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
          person14Species.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
          person14Species.send();

      });
      person14Name.open("GET", "http://swapi.co/api/people/14/?format=json");
      person14Name.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      person14Name.send();

    });

    person4HomeWorld.open("GET", "http://swapi.co/api/planets/1/?format=json");
    person4HomeWorld.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    person4HomeWorld.send();
  });

  person4Name.open("GET", "http://swapi.co/api/people/4/?format=json");
  person4Name.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  person4Name.send();

})();




