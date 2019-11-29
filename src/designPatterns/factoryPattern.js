function createEngineer() {
    const privateSkills = {};
    const engineer = {
        getSkills: name => {
            if(!name) throw new Error('A skill must have a name defined');
            if(!privateSkills[name]) throw new Error('Does\'t exist any skill with this name');
            return privateSkills[name];
         },
         setSkills: (name, value) => {
            if(!name) throw new Error('A skill must have a name defined');
            if(!value) throw new Error('Must specify the value');
            return privateSkills[name]= value;
         }
    };
    return engineer;
}

const engineer = createEngineer();
engineer.setSkills('JS', 'High');
console.log(engineer.getSkills('JS'));
console.log(engineer.privateSkills);
