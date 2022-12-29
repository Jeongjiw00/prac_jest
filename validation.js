module.exports = {
  isEmail: (value) => {
    //value값이 있으면 email에 value, 없으면 빈문자열
    const email = value || "";
    //@가 여러개 들어가면 오류가 생기므로 etc인자도 만들어줌
    const [localPart, domain, ...etc] = email.split("@");

    //@하나만 + 공백미포함 + 이메일젤앞에-안됨
    if (!localPart || !domain || etc.length !== 0) {
      return false;
    } else if (email.includes(" ")) {
      return false;
    } else if (email[0] === "-") {
      return false;
    }

    //localPart, domain 조건
    const localPartCheck = /^[a-zA-Z0-9_+-]+$/;
    const domainCheck = /^[a-zA-Z0-9.-]+$/;
    if (!localPartCheck.test(localPart) || !domainCheck.test(domain)) {
      return false;
    }

    return true;
  },
};
