// CODE here for your Lambda Classes
class Person {
    constructor(attrs){
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}

class Instructor extends Person {
    constructor(insAttrs){
        super(insAttrs);
        this.specilty = insAttrs.specilty;
        this.favLanguage = insAttrs.favLanguage;
        this.catchPhrase = insAttrs.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}.`);
    }
}

class Student extends Person {
    constructor(studentAttrs){
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
    }
    listsSubjects(){
        this.favSubjects.forEach(items => {
            console.log(items);
        });
    }
    PRAssignment(PRSubject){
        console.log(`${this.name} has submitted a PR for ${PRSubject}.`)
    }
    sprintChallenge(SCSubject){
        console.log(`${this.name} has begun sprint challenge on ${SCSubject}.`)
    }
}

class ProjectManager extends Instructor {
    constructor(PMAttrs){
        super(PMAttrs);
        this.gradClassName = PMAttrs.gradClassName;
        this.favInstructor = PMAttrs.favInstructor;
    }
    standUP(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`)
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`)
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specilty: 'Front-end',
    catchPhrase: `Don't forget the homies.`
});

const brit = new Instructor({
    name: 'Brit',
    location: 'Vancouver',
    age: 35,
    favLanguage: 'Elm',
    specilty: 'CSS',
    catchPhrase: 'You can do this.'
})

const mandy = new Student({
    name: 'Mandy',
    location: 'New York City',
    age: 28,
    previousBackground: 'Accountant',
    className: 'Web22',
    favSubjects: ['HTML','CSS', 'JavaScript']
})

const jack = new Student({
    name: 'Jack',
    location: 'South Africa',
    age: 23,
    previousBackground: 'Diamond dealer',
    className: 'DS4',
    favSubjects: ['Data Storytelling','Liner Algebra', 'Tree Ensembles']
})

const ada = new ProjectManager({
    name: 'Ada',
    location: 'Sydney',
    age: 30,
    gradClassName: 'Web16',
    favInstructor: 'Jason'
})

const mike = new ProjectManager({
    name: 'Mike',
    location: 'Portland',
    age: 42,
    gradClassName: 'DS1',
    favInstructor: 'Julie'
})

console.log(fred.name);
fred.speak();
fred.demo('JavaScript');
console.log(`${brit.location}, ${brit.catchPhrase}`);
brit.grade(mandy, 'HTML');
console.log(mandy.previousBackground);
mandy.listsSubjects();
mandy.PRAssignment('JSON');
console.log(jack.favSubjects);
jack.sprintChallenge('Applied Modeling');
console.log(ada.gradClassName);
ada.standUP('Web23');
console.log(mike.favInstructor);
mike.debugsCode(ada, 'Statistical Tests')