import { randomBytes } from "crypto";

export function slugify(text) {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')  // Replace spaces with -
        .replace(/[^\w\-]+/g, '')  // Remove all non-word chars
        .replace(/\-\-+/g, '-');  // Replace multiple - with single -
}

export function generateRandomHash(length = 6) {
    return randomBytes(length).toString('hex');
}