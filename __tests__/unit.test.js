// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
describe('unit tests', () => {
    test('valid phone number', () => {
      expect(functions.isPhoneNumber('111-222-3333')).toBe(true);
    });
    test('valid phone number', () => {
      expect(functions.isPhoneNumber('(111) 222-3333')).toBe(true);
    });
    test('invalid phone number', () => {
      expect(functions.isPhoneNumber('1234567890')).toBe(false);
    });
    test('invalid phone number', () => {
      expect(functions.isPhoneNumber('phone')).toBe(false);
    });
  

    test('valid email', () => {
      expect(functions.isEmail('email@gmail.com')).toBe(true);
    });
    test('valid email', () => {
      expect(functions.isEmail('email_test@gmail.com')).toBe(true);
    });
    test('invalid email', () => {
      expect(functions.isEmail('gmail.com')).toBe(false);
    });
    test('invalid email', () => {
      expect(functions.isEmail('gmail@com')).toBe(false);
    });
  

    test('valid strong password', () => {
      expect(functions.isStrongPassword('Password1')).toBe(true);
    });
    test('valid strong password', () => {
      expect(functions.isStrongPassword('Password_1')).toBe(true);
    });
    test('invalid strong password', () => {
      expect(functions.isStrongPassword('Pw1')).toBe(false);
    });
    test('invalid strong password', () => {
      expect(functions.isStrongPassword('Password$1')).toBe(false);
    });
  

    test('valid date', () => {
      expect(functions.isDate('11/11/2023')).toBe(true);
    });
    test('valid date', () => {
      expect(functions.isDate('1/1/2023')).toBe(true);
    });
    test('invalid date', () => {
      expect(functions.isDate('1/1/1')).toBe(false);
    });
    test('invalid date', () => {
      expect(functions.isDate('111/11/1')).toBe(false);
    });
  

    test('valid color', () => {
      expect(functions.isHexColor('#FFFFFF')).toBe(true);
    });
    test('valid color', () => {
      expect(functions.isHexColor('#FFF')).toBe(true);
    });
    test('invalid color', () => {
      expect(functions.isHexColor('#FF')).toBe(false);
    });
    test('invalid hex color', () => {
      expect(functions.isHexColor('red')).toBe(false);
    });
  });