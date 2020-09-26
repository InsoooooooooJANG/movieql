const insoo = {
    name : "insoo",
    age: 26,
    gender:"female"
};

const resolvers={
    Query:{
        person:()=>insoo
    }
};

export default resolvers;