// validation.spec.js

const { isEmail } = require("./validation");

test('입력한 이메일 주소에는 "@" 문자가 1개만 있어야 이메일 형식이다.', () => {
  expect(isEmail("sparta00@naver.com")).toEqual(true);
  expect(isEmail("sparta00@@@@naver.com")).toEqual(false);
  expect(isEmail("sparta00naver.com")).toEqual(false);
  expect(isEmail("sparta00naver.com@")).toEqual(true);
});

test("입력한 이메일 주소에 공백(스페이스)이 존재하면 이메일 형식이 아니다.", () => {
  expect(isEmail("sparta00@naver.com")).toEqual(true);
  expect(isEmail("sparta00 @naver.com")).toEqual(false);
  expect(isEmail("sparta00@na ver.com")).toEqual(false);
});

test("입력한 이메일 주소 맨 앞에 하이픈(-)이 있으면 이메일 형식이 아니다.", () => {
  expect(isEmail("sparta00@naver.com")).toEqual(true);
  expect(isEmail("sparta-00@naver.com")).toEqual(true);
  expect(isEmail("sparta-00-@-na--ver-.c-o-m")).toEqual(true);
  expect(isEmail("-sparta00@naver.com")).toEqual(false);
  expect(isEmail("---------------sparta00@naver.com")).toEqual(false);
});
