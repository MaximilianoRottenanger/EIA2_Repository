namespace RandomPoem {
    export let subjects: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"]
    export let predicates: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"]
    export let objects: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"]

    let poem: string = "";
    for (let i = subjects.length; i > 0; i--) {
        poem = getVerse(subjects, predicates, objects);
        console.log(poem);
    }



    function getVerse(_subjects: string[], _predicates: string[], _objects: string[]): string {
        let vers: string = ""
        let randomSubjects: number = Math.floor(Math.random()*_subjects.length) 
        let randomPredicates: number = Math.floor(Math.random()*_predicates.length)
        let randomObjects: number = Math.floor(Math.random()*_objects.length)

vers += subjects.splice(randomSubjects, 1)[0] + " " 
vers += predicates.splice(randomPredicates, 1)[0] + " "
vers += objects.splice(randomObjects, 1)[0]
        return vers;

    }
}
