export const lookupProfile = (name, prop) => {
  let indexContact = -1;
  for (const indx in contacts) {
    if (contacts[indx].firstName === name) {
      indexContact = indx;
      break;
    }
  }
  if (indexContact === -1) {
    return 'No such contact';
  } else if (contacts[indexContact].hasOwnProperty(prop)) {
    return contacts[indexContact][prop];
  } else {
    return 'No such property';
  }
};

const contacts = [
  {
    firstName: 'Akira',
    lastName: 'Laine',
    number: '0543236543',
    likes: ['Pizza', 'Coding', 'Brownie Points']
  },
  {
    firstName: 'Harry',
    lastName: 'Potter',
    number: '0994372684',
    likes: ['Hogwarts', 'Magic', 'Hagrid'],
    points: 0
  },
  {
    firstName: 'Sherlock',
    lastName: 'Holmes',
    number: '0487345643',
    likes: ['Intriguing Cases', 'Violin']
  },
  {
    firstName: 'Kristian',
    lastName: 'Vos',
    number: 'unknown',
    likes: ['JavaScript', 'Gaming', 'Foxes']
  }
];

console.log(lookupProfile('Kristian', 'lastName'));
