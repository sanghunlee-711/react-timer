/**
 * 실제 Rest Api 를 대신하는 Mock Api 입니다.
 * (async 를 제거하지 말아주세요.)
 */

export const getStartDate = async () => {
  return Date.now() - 1000 * 60 * 60 * 24;
};

export const getEndDate = async () => {
  return Date.now() + 1000 * 60 * 60 * 24;
};

export const getDate2 = async () => {
  const promises = [getStartDate, getEndDate];
  const results = await Promise.allSettled(promises);
  return { results };
};

export const getDate = async () => {
  const start = await getStartDate();
  const end = await getEndDate();
  return { start, end };
};
