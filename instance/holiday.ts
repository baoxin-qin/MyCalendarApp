/**
 * @file holiday.ts
 * @description some holiday or special event date
 */
interface Holiday {
    month: number;
    date: number;
    name: string;
    event: string;
};

const Holidays: Holiday[] = [
  // January
  { month: 1, date: 1, name: '元旦节', event: '新年伊始，万象更新' },
  // February
  { month: 2, date: 14, name: '情人节', event: '浪漫爱意，温暖传递' },
  // March
  { month: 3, date: 8, name: '国际妇女节', event: '致敬女性，闪耀力量' },
  { month: 3, date: 12, name: '植树节', event: '播种绿色，拥抱未来' },
  { month: 3, date: 14, name: '情人节', event: '爱的回响，甜蜜加倍' },
  // April
  { month: 4, date: 1, name: '愚人节', event: '幽默一刻，欢乐无限' },
  { month: 4, date: 22, name: '世界地球日', event: '珍爱地球，守护家园' },
  // May
  { month: 5, date: 1, name: '国际劳动节', event: '致敬奋斗，歌颂劳动' },
  { month: 5, date: 4, name: '五四青年节', event: '青春激昂，放飞理想' },
  { month: 5, date: 12, name: '国际护士节', event: '白衣天使，大爱无疆' },
  // June
  { month: 6, date: 1, name: '国际儿童节', event: '纯真笑脸，快乐成长' },
  { month: 6, date: 5, name: '世界环境日', event: '关注环境，即刻行动' },
  // July
  { month: 7, date: 1, name: '建党节', event: '不忘初心，牢记使命' },
  // August
  { month: 8, date: 1, name: '建军节', event: '钢铁长城，致敬军魂' },
  { month: 8, date: 8, name: '全民健身日', event: '活力全开，健康生活' },
  // September
  { month: 9, date: 10, name: '教师节', event: '桃李芬芳，师恩难忘' },
  // October
  { month: 10, date: 1, name: '国庆节', event: '盛世华诞，荣耀中华' },
  { month: 10, date: 31, name: '万圣节前夜', event: '捣蛋快乐，奇幻之夜' },
  // November
  // December
  { month: 12, date: 24, name: '平安夜', event: '静谧祥和，美好祝愿' },
  { month: 12, date: 25, name: '圣诞节', event: '璀璨佳节，分享喜悦' },
];

export function isHoliday(month: number, date: number) {
	const holiday = Holidays.find(h => h.month === month && h.date === date);
	return holiday ? { name: holiday.name, event: holiday.event } : null;
}