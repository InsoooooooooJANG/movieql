export let people = [
    {
        id:1,
        name : "insoo",
        age: 26,
        gender:"female"
    },
    {
        id:2,
        name : "sumin",
        age: 26,
        gender:"female"
    },
    {
        id:3,
        name : "jiwon",
        age: 26,
        gender:"female"
    },
    {
        id:4,
        name : "nayeon",
        age: 26,
        gender:"female"
    },
    {
        id:5,
        name : "test",
        age: 26,
        gender:"female"
    },
    {
        id:6,
        name : "ara",
        age: 26,
        gender:"female"
    },
    {
        id:7,
        name : "suzy",
        age: 26,
        gender:"female"
    },
    {
        id:8,
        name : "K",
        age: 26,
        gender:"female"
    },
    {
        id:9,
        name : "nicolas",
        age: 26,
        gender:"female"
    },
    {
        id:10,
        name : "eunji",
        age: 26,
        gender:"female"
    }
];

export const getById = id=>{
    const filteredPeople = people.filter( person=>person.id === id);
    return filteredPeople[0];
}

export const deletePerson=id=>{
    const cleanPeople = people.filter(person => person.id !==id);
    if(people.length> cleanPeople.length){
        people = cleanPeople;
        return true;
    }else{
        return false;
    }
}

export const addPerson = (name, age, gender) =>{

    const newPerson={
        id: `${people.length + 1}`,
        name,
        age, 
        gender
    };
    people.push(newPerson);
    return newPerson;
}