// validation.spec.js

const { isEmail } = require("./validation");

test('입력한 이메일 주소에는 "@" 문자가 1개만 있어야 이메일 형식이다.', () => {
  expect(isEmail("sparta00@naver.com")).toEqual(true);
  expect(isEmail("sparta00@@@@naver.com")).toEqual(false);
  expect(isEmail("sparta00naver.com")).toEqual(false);
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

test("입력한 이메일 주소의 로컬파트에 영문 대소문자와 숫자, 특수문자는 덧셈기호(+), 하이픈(-), 언더바(_) 3개 외에 다른 값이 존재하면 이메일 형식이 아니다.", () => {
  expect(isEmail("sparta00@naver.com")).toEqual(true);
  expect(isEmail("sparta-00@naver.com")).toEqual(true);
  expect(isEmail("spar_ta-00+@-na--ver-.c-o-m")).toEqual(true);
  expect(isEmail("sp,a.rt/a00@naver.com")).toEqual(false);
  expect(isEmail(";sp:a|rt[a00@naver.com")).toEqual(false);
});

test("입력한 이메일 주소 도메인에 영문 대소문자와 숫자, 점(.), 하이픈(-) 외에 다른 값이 존재하면 이메일 형식이 아니다.", () => {
  expect(isEmail("sparta00@naver.com")).toEqual(true);
  expect(isEmail("sparta00@na123ver.com")).toEqual(true);
  expect(isEmail("sparta-00-@-na--ver-.c-o-m")).toEqual(true);
  expect(isEmail("-sparta00@na;ve+r.co,m")).toEqual(false);
  expect(isEmail("sparta00@nave#.^c&o/m")).toEqual(false);
});
