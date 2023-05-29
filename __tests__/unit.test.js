// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
describe('unit tests', () => {
    test('valid phone number', () => {
      expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
    });
    test('valid phone number with area code', () => {
      expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
    });
    test('invalid phone number - wrong format', () => {
      expect(functions.isPhoneNumber('1234567890')).toBe(false);
    });
    test('invalid phone number - not a number', () => {
      expect(functions.isPhoneNumber('phone')).toBe(false);
    });
  

    test('valid email', () => {
      expect(functions.isEmail('email@example.com')).toBe(true);
    });
    test('valid email with underscore', () => {
      expect(functions.isEmail('email_test@example.com')).toBe(true);
    });
    test('invalid email - no @', () => {
      expect(functions.isEmail('email.com')).toBe(false);
    });
    test('invalid email - no .', () => {
      expect(functions.isEmail('email@com')).toBe(false);
    });
  

    test('valid strong password', () => {
      expect(functions.isStrongPassword('Password1')).toBe(true);
    });
    test('valid strong password with underscore', () => {
      expect(functions.isStrongPassword('Password_1')).toBe(true);
    });
    test('invalid strong password - too short', () => {
      expect(functions.isStrongPassword('Pw1')).toBe(false);
    });
    test('invalid strong password - invalid characters', () => {
      expect(functions.isStrongPassword('Password$1')).toBe(false);
    });
  

    test('valid date', () => {
      expect(functions.isDate('12/12/2020')).toBe(true);
    });
    test('valid date - single digit month and day', () => {
      expect(functions.isDate('1/1/2020')).toBe(true);
    });
    test('invalid date - wrong format', () => {
      expect(functions.isDate('2020-12-12')).toBe(false);
    });
    test('invalid date - not a date', () => {
      expect(functions.isDate('date')).toBe(false);
    });
  

    test('valid hex color - 3 digit', () => {
      expect(functions.isHexColor('#FFF')).toBe(true);
    });
    test('valid hex color - 6 digit', () => {
      expect(functions.isHexColor('#FFFFFF')).toBe(true);
    });
    test('invalid hex color - 2 digit', () => {
      expect(functions.isHexColor('#FF')).toBe(false);
    });
    test('invalid hex color - not a color', () => {
      expect(functions.isHexColor('white')).toBe(false);
    });
  });