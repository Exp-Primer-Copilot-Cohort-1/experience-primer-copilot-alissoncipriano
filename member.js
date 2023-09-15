function skillsMember() {
  var person = {
    skills: ['js', 'css', 'html'],
    getSkills: function() {
      return this.skills;
    }
  };

  var personSkills = person.getSkills;
  console.log(personSkills()); // undefined
  console.log(personSkills.call(person)); // ['js', 'css', 'html']
}