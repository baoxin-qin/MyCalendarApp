/**
 * @file constellation.ts
 * @description This file contains the constellation data.
 */
interface IConstellation {
    nameCN: string;
    nameEng: string;
    start: [number, number];
    end: [number, number];
    feature: string;
};

const Constellation: IConstellation[] = [
    { nameCN: '水瓶座', nameEng: 'Aquarius', start: [1, 20], end: [2, 18], feature: '思想天马行空，是灵感与创新的代名词'},
    { nameCN: '双鱼座', nameEng: 'Pisces', start: [2, 19], end: [3, 20], feature: '内心温柔似海，充满浪漫的想象力与同情心'},
    { nameCN: '白羊座', nameEng: 'Aries', start: [3, 21], end: [4, 19], feature: '勇气一往无前，是充满行动力的开拓者'},
    { nameCN: '金牛座', nameEng: 'Taurus', start: [4, 20], end: [5, 20], feature: '气质沉稳坚定，懂得欣赏并创造美好的生活'},
    { nameCN: '双子座', nameEng: 'Gemini', start: [5, 21], end: [6, 21], feature: '思维敏捷灵动，在交流与探索中发现无限可能'},
    { nameCN: '巨蟹座', nameEng: 'Cancer', start: [6, 22], end: [7, 22], feature: '情感细腻深邃，是爱与安全感的最佳守护者'},
    { nameCN: '狮子座', nameEng: 'Leo', start: [7, 23], end: [8, 22], feature: '光芒自信耀眼，天生拥有温暖人心的领导力'},
    { nameCN: '处女座', nameEng: 'Virgo', start: [8, 23], end: [9, 22], feature: '追求臻于至善，在细节中构筑完美的秩序'},
    { nameCN: '天秤座', nameEng: 'Libra', start: [9, 23], end: [10, 23], feature: '天性优雅和谐，在平衡与美感中寻求真理'},
    { nameCN: '天蝎座', nameEng: 'Scorpio', start: [10, 24], end: [11, 21], feature: '意志深邃强大，拥有洞察本质与涅槃重生的力量'},
    { nameCN: '射手座', nameEng: 'Sagittarius', start: [11, 22], end: [12, 21], feature: '灵魂自由不羁，永远追寻着生命的意义与远方'},
    { nameCN: '摩羯座', nameEng: 'Capricorn', start: [12, 22], end: [1, 19], feature: '步伐稳健务实，以坚韧和耐心构筑理想的高塔'},
];

export function getConstellation(date: Date){
    const month = date.getMonth() + 1;
    const day = date.getDate();

    let nameCN = '', nameEng = '', feature = '';
    for (let item of Constellation){
        if (item.start[0] < item.end[0]) {
            if ((month === item.start[0] && day >= item.start[1])
                || (month === item.end[0] && day <= item.end[1])
                || (month > item.start[0] && month < item.end[0])){
                    nameCN = item.nameCN;
                    nameEng = item.nameEng;
                    feature = item.feature;
                    break;
                }
        } else {
            if ((month === item.start[0] && day >= item.start[1])
                || (month === item.end[0] && day <= item.end[1])
                || (month > item.start[0] && month < item.end[0])) {
                    nameCN = item.nameCN;
                    nameEng = item.nameEng;
                    feature = item.feature;
                    break;
                }
        }
    }
    return { nameCN, nameEng, feature };
};