/**
 * [(lv.3)나이-통계-구하기.js]
 *
 * 1) users 배열은 [{ age: 10 }, { age: 30 }, ...] 형태를 가집니다.
 * 2) calculateStatistics(users)는 평균 나이(averageAge)와 최대 나이(maxAge)를 구해서
 *    { averageAge, maxAge } 객체 형태로 반환해야 합니다.
 * 3) reduce 메서드를 사용하세요.
 *
 * @param {{age:number}[]} users
 * @returns {{ averageAge: number, maxAge: number }}
 */

function calculateStatistics(users) {
  if (users.length === 0) {
    return { averageAge: 0, maxAge: 0 };
  }
  const { sumAge, maxAge } = users.reduce(
    (acc, cur) => {
      acc.sumAge += cur.age; // 나이를 누적
      acc.maxAge = Math.max(acc.maxAge, cur.age); // 최대 나이 업데이트
      return acc;
    },
    { sumAge: 0, maxAge: users[0].age } // 초기값 설정
  );

  const averageAge = sumAge / users.length;

  return { averageAge, maxAge };
}
console.log(calculateStatistics([{ age: -5 }, { age: -10 }, { age: -15 }]));
console.log(calculateStatistics([]));

// export 를 수정하지 마세요.
export { calculateStatistics };
