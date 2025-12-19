/**
 * @file color.ts
 * @description 随机幸运色 (中式+欧式)
 */
interface MyColor {
    name: string;
    color: string; // 16进制颜色值
    meaning: string; // 颜色的含义
}
export const LuckyColor: MyColor[] = [
    // 红色系
  { name: '绛雪凝春', color: '#C06F98', meaning: '雪中红梅，坚韧而浪漫的爱' },
  { name: '丹砂点漆', color: '#9C2A35', meaning: '朱墨交融，古典而深沉的热情' },
  { name: '胭脂醉晚', color: '#D13F5A', meaning: '暮色胭脂，温柔而惆怅的思念' },
  { name: '珊瑚映月', color: '#F88379', meaning: '珊瑚月影，纯净而恒久的守护' },
  { name: '鹤顶流霞', color: '#D52B2B', meaning: '鹤顶霞光，高贵而炽热的生命' },
  { name: '勃艮第红', color: '#900020', meaning: '法国红酒，奢华与热情的象征' },
  { name: '威尼斯绯', color: '#C80815', meaning: '意大利晚霞，浪漫与激情' },
  { name: '皇家胭脂', color: '#B3446C', meaning: '宫廷礼服，高贵与优雅' },
  { name: '玫瑰庄园', color: '#E8B4B8', meaning: '英伦玫瑰，温柔的爱情' },
  { name: '歌剧魅影', color: '#8B0000', meaning: '剧场帷幕，戏剧与神秘' },

  // 绿色系
  { name: '空谷幽簧', color: '#4F6F57', meaning: '竹林幽静，清雅脱俗的心境' },
  { name: '琅玕染雾', color: '#7BA47D', meaning: '青玉蒙雾，朦胧而神秘的智慧' },
  { name: '秋水浮碧', color: '#2D5C4B', meaning: '深潭碧水，沉稳而深邃的思绪' },
  { name: '蕉窗听雨', color: '#8AAA85', meaning: '蕉叶雨声，闲适而安宁的时光' },
  { name: '千峰翠色', color: '#3A5F49', meaning: '群山叠翠，广阔而包容的胸怀' },
  { name: '凡尔赛绿', color: '#2E8B57', meaning: '宫廷园林，秩序与繁荣' },
  { name: '翡冷翠碧', color: '#4A766E', meaning: '佛罗伦萨，艺术与复兴' },
  { name: '英伦苔原', color: '#6B8E23', meaning: '英国乡野，自然与坚韧' },
  { name: '孔雀石绿', color: '#0BDA51', meaning: '贵族珠宝，华丽与守护' },
  { name: '仲夏夜梦', color: '#90EE90', meaning: '莎士比亚，诗意与幻想' },

  // 蓝色系
  { name: '雨过天青', color: '#C4D7D6', meaning: '雨后初晴，清新而希望的开始' },
  { name: '月洗青瓷', color: '#A7C4CD', meaning: '月下青瓷，冷冽而纯净的品格' },
  { name: '沧海遗珠', color: '#2A5C7A', meaning: '深海珍宝，珍贵而稀有的才华' },
  { name: '暮云合璧', color: '#7B92AA', meaning: '暮云交融，和谐而永恒的联结' },
  { name: '珐琅凝辉', color: '#3B6E8C', meaning: '珐琅光泽，精致而典雅的艺术' },
  { name: '爱琴海蓝', color: '#1E90FF', meaning: '希腊海洋，自由与浪漫' },
  { name: '皇家宝蓝', color: '#002366', meaning: '王室徽章，权威与忠诚' },
  { name: '哥特穹顶', color: '#4682B4', meaning: '教堂玻璃，神圣与崇高' },
  { name: '雾都晨灰', color: '#87CEEB', meaning: '伦敦晨雾，朦胧与思索' },
  { name: '星空钴蓝', color: '#0047AB', meaning: '梵高星空，深邃与梦想' },

  // 紫色系
  { name: '紫气东来', color: '#E6D5E6', meaning: '淡雅祥云紫，迷人的气息' },
  { name: '丁香结雨', color: '#C8A2C8', meaning: '丁香花瓣，清雅而动人的气质' },
  { name: '暮烟凝紫', color: '#8B7B97', meaning: '暮色山峦，幽邃静谧' },
  { name: '葡萄醅夜', color: '#6C4675', meaning: '欲饮葡萄酒，静待远方人' },
  { name: '瑞霭流苏', color: '#D8BFD8', meaning: '紫色染血，神秘惆怅' },
  { name: '拜占庭紫', color: '#8A2BE2', meaning: '帝国尊贵，权力与神秘' },
  { name: '薰衣草田', color: '#B57EDC', meaning: '普罗旺斯，宁静与治愈' },
  { name: '天鹅绒紫', color: '#9400D3', meaning: '贵族面料，奢华与温柔' },
  { name: '紫罗兰夜', color: '#8B00FF', meaning: '巴黎夜色，浪漫与诱惑' },
  { name: '主教长袍', color: '#7F00FF', meaning: '宗教庄严，信仰与智慧' },

  // 黄色/金色系
  { name: '秋香染梧', color: '#D9B44A', meaning: '梧桐秋色，文人雅士的闲适情怀' },
  { name: '蜜蜡含光', color: '#BF8D3A', meaning: '蜜蜡温润，历经时光的沉淀之美' },
  { name: '夕照鎏金', color: '#E6B422', meaning: '落日余晖，辉煌而短暂的光芒' },
  { name: '桂子浮金', color: '#F0C34A', meaning: '桂花飘香，秋日丰收的喜悦' },
  { name: '缃帙古色', color: '#D6C6A6', meaning: '古籍书卷，承载智慧的历史痕迹' },
  { name: '威尼斯金', color: '#FFD700', meaning: '文艺复兴，辉煌与创造力' },
  { name: '向日葵田', color: '#FFCC00', meaning: '荷兰油画，活力与希望' },
  { name: '皇家蜂蜜', color: '#F0C420', meaning: '宫廷甜点，甜美与富足' },
  { name: '古罗马金', color: '#E6BE8A', meaning: '帝国荣耀，历史与永恒' },
  { name: '琥珀黄昏', color: '#FFBF00', meaning: '北欧落日，温暖与怀旧' },

  // 黑白素色系
  { name: '玄天垂墨', color: '#3A3734', meaning: '夜幕低垂，深邃而神秘的宇宙' },
  { name: '素雪裁绡', color: '#F0F0F0', meaning: '白雪轻纱，纯净无瑕的意境' },
  { name: '乌夜凝霜', color: '#5C5C5C', meaning: '寒夜霜华，清冷孤寂的思绪' },
  { name: '蕉月沁纸', color: '#E8E3D9', meaning: '月光宣纸，文人的诗意与风骨' },
  { name: '墨池春冻', color: '#4A4A4A', meaning: '墨色凝结，艺术创作的沉淀' },
  { name: '哥特玄黑', color: '#1C1C1C', meaning: '中世纪建筑，神秘与力量' },
  { name: '巴洛克珍珠', color: '#F8F8FF', meaning: '宫廷珠宝，纯净与高贵' },
  { name: '蒸汽灰钢', color: '#808080', meaning: '工业革命，革新与实用' },
  { name: '修道院石', color: '#A9A9A9', meaning: '静谧石墙，沉思与平和' },
  { name: '威尼斯灰', color: '#696969', meaning: '水城石板，历史与沉淀' },

  // 组合意境
  { name: '青山衔黛', color: '#6A8776', meaning: '远山如黛，水墨画中的悠然意境' },
  { name: '烟螺数点', color: '#8B8680', meaning: '螺髻染烟，江南水乡的朦胧之美' },
  { name: '藕丝秋半', color: '#E0C9CB', meaning: '藕荷褪色，夏末初秋的温柔过渡' },
  { name: '晚荻飞霜', color: '#C4BFB6', meaning: '芦荻飞白，暮色中的诗意苍茫' },
  { name: '苍葭溯雪', color: '#A8B2A4', meaning: '芦苇迎雪，坚韧不屈的生命力' },
  { name: '洛可可粉', color: '#F4C2C2', meaning: '法国沙龙，精致与欢愉' },
  { name: '新艺术绿', color: '#00A86B', meaning: '曲线自然，流动与生命' },
  { name: '装饰艺术金', color: '#D4AF37', meaning: '几何奢华，现代与优雅' },
  { name: '包豪斯银', color: '#C0C0C0', meaning: '现代设计，简约与功能' },
  { name: '印象派紫', color: '#CC99FF', meaning: '莫奈花园，光影与瞬间' }
];