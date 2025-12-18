/**
 * @file lunar.ts
 * @description 农历计算
 */

const ZODIAC: string[] = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'];
const HEAVENLY_STEMS: string[] = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
const EARTHLY_STEMS: string[] = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

// 获取今年农历年份名
export const getLunarYearName = (solarYear: number) => {
    const base = { // 庚辰龙年
        year: 2000,
        zodiacIdx: 4,
        heavenlyStem: 6,
        earthlyStem: 4,
    }
    let result = '';
    const diffYear = solarYear - base.year;
    if (diffYear >= 0) {
        const zodiacIdx = (base.zodiacIdx + diffYear) % 12;
        const heavenlyStemIdx = (base.heavenlyStem + diffYear) % 10;
        const earthlyStemIdx = (base.earthlyStem + diffYear) % 12;
        result = `${HEAVENLY_STEMS[heavenlyStemIdx]}${EARTHLY_STEMS[earthlyStemIdx]}${ZODIAC[zodiacIdx]}年`;
    } else {
        const zodiacIdx = (base.zodiacIdx + diffYear + 12) % 12;
        const heavenlyStemIdx = (base.heavenlyStem + diffYear + 10) % 10;
        const earthlyStemIdx = (base.earthlyStem + diffYear + 12) % 12;
        result = `${HEAVENLY_STEMS[heavenlyStemIdx]}${EARTHLY_STEMS[earthlyStemIdx]}${ZODIAC[zodiacIdx]}年`;
    }
    return result;
}