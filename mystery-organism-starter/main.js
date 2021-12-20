// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,


    //method that mutates the base of a DNA
    mutate(){
      //to randomly select the item of the dna 
    let index = Math.floor(Math.random() * this.dna.length);
    

    //to find the index of the pastbase
    let previousBase = this.dna[i];


    let alteredBases = ["A", "T", "C", "G"];
    alteredBases.splice(alteredBases.indexOf(previousBase), 1);
    let mutatedBase = alteredBases[Math.floor(Math.random() * 3)];
    
    //console.log(`Changed ${oldBase} to ${mutatedBase} on number ${i}`);
    return this.dna.splice(i, 1, mutatedBase);
    },
    compareDNA(otherPAqeour) {
      let count = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] == otherPAqeour.dna[i]) {
          count += 1;
        }
      }
      // console.log(`Specimen #${this.specimenNum} has ${count * 100/this.dna.length}% DNA bases in common with #${otherPAqeour.specimenNum}.`)
    },
    willLikelySurvive() {
      const cAndG = this.dna.filter(letter => letter === 'C' || letter === 'G');

      if (cAndG.length/this.dna.length > 0.6) {
        return true;
      } else {
        return false;
      }
    }
  }
  }
  
  







