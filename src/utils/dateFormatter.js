export const dateFormatter = {
  /**
   * 스트링 타입의 날짜(YYYYMMDD ~ YYMMDDhhmiss)를 `YYYY-MM-DD`로 포맷해서 반환
   * @param {string} strDate 
   * @returns {string} YYYY-MM-DD 포맷
   */
  withHyphenYMD: (strDate) => {
    return (
      `${strDate.slice(0, 4)}-${strDate.slice(4, 6)}-${strDate.slice(6, 8)}`
    )
  },

  /**
   * 스트링 타입의 날짜(YYMMDDhhmiss)를 `TT-MM-SS`로 포맷해서 반환
   * @param {string} strDate 
   * @returns {string} TT-Mi-SS 포맷
   */
  withHyphenTMS: (strDate) => {
    return (
      `${strDate.slice(8, 10)}-${strDate.slice(10, 12)}-${strDate.slice(12, 14)}`
    )
  },
  /**
   * Date객체를 `YYYYMMDD` 포맷으로 반환
   * @param {Date} date 
   * @returns {string} `YYYYMMDD` 포맷
   */
  formatDateToYMD: (date) => {
    return `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${(date.getDate()).toString().padStart(2, '0')}`
  }
}