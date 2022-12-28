module.exports = {
  isEmail: (value) => {
    //value값이 있으면 email에 value, 없으면 빈문자열
    const email = value || "";

    //@하나만 + 공백미포함 + 이메일젤앞에-안됨
    if (email.split("@").length !== 2) {
      return false;
    } else if (email.includes(" ")) {
      return false;
    } else if (email[0] === "-") {
      return false;
    }

    return true;
  },
};
