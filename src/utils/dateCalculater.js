export const dateCalculater = {
  /**
   * 현시간기준 timestamp만큼 과거의 날짜를 계산하여 Date객체 반환
   * @param {number} timestamp 
   * @returns {Date} timestamp만큼 과거의 Date 객체
   */
  getPastDate: (timestamp) => {
    const now = new Date();
    return new Date (new Date(now - timestamp)); 
  }
}