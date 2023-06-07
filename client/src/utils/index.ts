const space: string = '%20';
const slash: string = '%2F';
const colon: string = '%3A';
const plus: string = '%2B';

export const formatAddressInput = (input: string): string => {
    return `${input.split(' ').join(space)}`;
}