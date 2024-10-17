"use strict";
var RandomPoem;
(function (RandomPoem) {
    RandomPoem.subjects = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    RandomPoem.predicates = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    RandomPoem.objects = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    let poem = "";
    for (let i = RandomPoem.subjects.length; i > 0; i--) {
        poem = getVerse(RandomPoem.subjects, RandomPoem.predicates, RandomPoem.objects);
        console.log(poem);
    }
    function getVerse(_subjects, _predicates, _objects) {
        let vers = "";
        let randomSubjects = Math.floor(Math.random() * _subjects.length);
        let randomPredicates = Math.floor(Math.random() * _predicates.length);
        let randomObjects = Math.floor(Math.random() * _objects.length);
        vers += RandomPoem.subjects.splice(randomSubjects, 1)[0] + " ";
        vers += RandomPoem.predicates.splice(randomPredicates, 1)[0] + " ";
        vers += RandomPoem.objects.splice(randomObjects, 1)[0];
        return vers;
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=poem.js.map