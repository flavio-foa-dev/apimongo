import { isValidObjectId } from 'mongoose';

export function getBookIndex(arr, id) {
  return arr.findIndex((book) => book.id === parseInt(id, 10));
}

export function isValidId(id) {
  try {
    return new isValidObjectId(id).toString() === id;
  }catch (error) {
    return false;
  }
}