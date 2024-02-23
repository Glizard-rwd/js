function  canExecuteFastAttack(knightIsAwake) {
    return !knightIsAwake; // knight is sleeping
}

function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
    return (knightIsAwake || archerIsAwake || prisonerIsAwake)
}

function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
    return prisonerIsAwake && !archerIsAwake;
}

function canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent) {
    return (petDogIsPresent && !archerIsAwake) || (prisonerIsAwake && !archerIsAwake && !knightIsAwake);

}

const knightIsAwake = false;
const archerIsAwake = false;
const prisonerIsAwake = false;
const petDogIsPresent = false;

console.log(canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent));