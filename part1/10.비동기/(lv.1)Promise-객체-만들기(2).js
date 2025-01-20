import { resolvePromise } from "./(lv.1)Promise-객체-만들기";

/**
 * [(lv.1)[1]Promise-객체-만들기.js]
 *
 * 함수 returnHello는 "Hello"를 resolve하는 Promise를 반환합니다.
 *
 * @returns {Promise<string>}
 */
function returnHello() {
  return new Promise((res) => {
    res("Hello");
  });
}
// export를 수정하지 마세요.
export { returnHello };
