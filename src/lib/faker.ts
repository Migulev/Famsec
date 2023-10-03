// npm install @faker-js/faker --save-dev

import { faker } from '@faker-js/faker';

// generate an array of random paragraphs
export function fakeParagraphsArray(
  numberOfParagraphs: number,
  numberOfWords: number = 20,
): string[] {
  const paragraphsArray = new Array(numberOfParagraphs).fill('');

  for (let i = 0; i < numberOfParagraphs; i++) {
    const random = Math.floor(Math.random() * 10);
    paragraphsArray[i] = faker.lorem.sentence(numberOfWords + random);
  }
  return paragraphsArray;
}

// generate an array of random text
export function fakeTextArray(numberOfParagraphs: number = 1): string[] {
  const textArray = new Array(numberOfParagraphs).fill('');
  for (let i = 0; i < numberOfParagraphs; i++) {
    textArray[i] = faker.lorem.text();
  }
  return textArray;
}

export function fakeFullNameArray(numberOfNames: number = 1): string[] {
  const nameArray = new Array(numberOfNames).fill('');
  for (let i = 0; i < numberOfNames; i++) {
    nameArray[i] = faker.person.fullName();
  }
  return nameArray;
}

export function fakeJobTitleArray(numberOfTitles: number = 1): string[] {
  const titleArray = new Array(numberOfTitles).fill('');
  for (let i = 0; i < numberOfTitles; i++) {
    titleArray[i] = faker.person.jobTitle();
  }
  return titleArray;
}

export const fakeDescriptionArray = fakeParagraphsArray(6);

export const fakeNameArray = fakeFullNameArray(5);

export const fakeTitleArray = fakeJobTitleArray(5);
