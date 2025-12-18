/**
 * @file constellation.ts
 * @description 获取本月星座
 */
const CONSTELLATIONS = [
    {nameCN: '水瓶座', nameEN: 'aquarius', start:[1, 20], end: [2, 18]},
    {nameCN: '双鱼座', nameEN: 'pisces', start:[2, 19], end: [3, 20]},
    {nameCN: '白羊座', nameEN: 'aries', start:[3, 21], end: [4, 19]},
    {nameCN: '金牛座', nameEN: 'taurus', start:[4, 20], end: [5, 20]},
    {nameCN: '双子座', nameEN: 'gemini', start:[5, 21], end: [6, 20]},
    {nameCN: '巨蟹座', nameEN: 'cancer', start:[6, 21], end: [7, 22]},
    {nameCN: '狮子座', nameEN: 'leo', start:[7, 23], end: [8, 22]},
    {nameCN: '处女座', nameEN: 'virgo', start:[8, 23], end: [9, 22]},
    {nameCN: '天秤座', nameEN: 'libra', start:[9, 23], end: [10, 23]},
    {nameCN: '天蝎座', nameEN: 'scorpio', start:[10, 24], end: [11, 21]},
    {nameCN: '射手座', nameEN: 'sagittarius', start:[11, 22], end: [12, 21]},
    {nameCN: '摩羯座', nameEN: 'capricorn', start:[12, 22], end: [1, 19]}
];

export const getConstellation = (month: number, date: number) => {
    for (const constellation of CONSTELLATIONS) {
        const [startMonth, startDay] = constellation.start;
        const [endMonth, endDay] = constellation.end;
        
        const isMatch = startMonth > endMonth
            // 跨年的情况
            ? (month === startMonth && date >= startDay) || (month === endMonth && date <= endDay)
            // 同年的情况
            : (month > startMonth && month < endMonth) ||
              (month === startMonth && date >= startDay) ||
              (month === endMonth && date <= endDay);
        
        if (isMatch) {
            return {
                nameCN: constellation.nameCN,
                nameEN: constellation.nameEN
            };
        }
    }

    return {nameCN: '', nameEN: ''}; // 兜底，理论上不会出现
}