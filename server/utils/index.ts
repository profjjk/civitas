import { Address } from './types';
const space: string = '%20';
const slash: string = '%2F';
const colon: string = '%3A';

export const formatAddress = (address: Address): string => {
    const formattedAddress = [
        `${address.street1.split(' ').join(space)}${space}`,
        `${address.street2 && address.street2.split(' ').join(space)}${space}`,
        `${address.city}${space}`,
        `${address.state}${space}`,
        `${address.zipcode}`
    ]
    return formattedAddress.join('');
}

export const formatDivisionId = (id: string): string => {
    const idArray: string[] = id.split('');
    idArray.forEach((char: string, index: number): void => {
        if (char === '/') {
            idArray[index] = slash;
        }
        if (char === ':') {
            idArray[index] = colon;
        }
    });
    return idArray.join('');
}