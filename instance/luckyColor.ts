/**
 * @file luckyColor.ts
 * @description some lucky colors
 */
interface ILuckyColor {
    nameCN: string;
    nameEng: string;
    meaning: string;
    color: string;
};

const LuckyColor: ILuckyColor[] = [
  { nameCN: "天穹之辉", nameEng: "Celestial", meaning: "深邃的智慧", color: "#4F6FE2" },
  { nameCN: "青森之语", nameEng: "Verdant", meaning: "蓬勃的生命力", color: "#2D5A27" },
  { nameCN: "紫晶梦境", nameEng: "Amethyst", meaning: "灵性与平和", color: "#9966CC" },
  { nameCN: "烟霞绯", nameEng: "Blush", meaning: "温柔的悸动", color: "#DE5D83" },
  { nameCN: "静心灰绿", nameEng: "Sage", meaning: "沉静的智慧", color: "#88A28A" },
  { nameCN: "鎏金岁月", nameEng: "Gilded", meaning: "被点亮的幸运", color: "#EDC755" },
  { nameCN: "深海谧蓝", nameEng: "Abyss", meaning: "无限的潜能", color: "#162A54" },
  { nameCN: "赤陶印迹", nameEng: "Terra", meaning: "温暖与归属", color: "#E2725B" },
  { nameCN: "月华珍珠", nameEng: "Pearl", meaning: "温润的光华", color: "#F0EBD8" },
  { nameCN: "幽谷苔痕", nameEng: "Moss", meaning: "坚韧的生机", color: "#5A7865" },
  { nameCN: "烬夜余温", nameEng: "Ember", meaning: "不息的热忱", color: "#F05E23" },
  { nameCN: "丝绒午夜", nameEng: "Velvet", meaning: "奢华的静谧", color: "#0F0326" },
  { nameCN: "秋水映翠", nameEng: "Jade", meaning: "纯净与庇佑", color: "#00A86B" },
  { nameCN: "破晓晨光", nameEng: "Dawn", meaning: "崭新的希望", color: "#F6C9B2" },
  { nameCN: "薄暮冥紫", nameEng: "Dusk", meaning: "神秘的邂逅", color: "#574160" },
  { nameCN: "空境之蓝", nameEng: "Serene", meaning: "永恒的安宁", color: "#91A6B1" },
  { nameCN: "微醺桑格利亚", nameEng: "Sangria", meaning: "欢愉的庆典", color: "#990011" },
  { nameCN: "烟粉石英", nameEng: "Quartz", meaning: "柔和的疗愈", color: "#E7BDB1" },
  { nameCN: "神谕之蓝", nameEng: "Oracle", meaning: "直觉与启示", color: "#395E7A" },
  { nameCN: "蜜语橙光", nameEng: "Nectar", meaning: "生活的甘甜", color: "#FFB347" },
  { nameCN: "沙海蜃楼", nameEng: "Mirage", meaning: "迷人的幻象", color: "#B8A9A8" },
  { nameCN: "环礁湖蓝", nameEng: "Lagoon", meaning: "清新的活力", color: "#63B7B7" },
  { nameCN: "帝政紫金", nameEng: "Royal", meaning: "尊贵与气场", color: "#7851A9" },
  { nameCN: "雨后青石", nameEng: "Moss", meaning: "沉淀的时光", color: "#6A7966" },
  { nameCN: "柔光薄纱", nameEng: "Chiffon", meaning: "轻盈的浪漫", color: "#F8F4E9" },
  { nameCN: "星火余烬", nameEng: "Cinder", meaning: "暗藏的能量", color: "#6E4545" },
  { nameCN: "凛冬霜晶", nameEng: "Frost", meaning: "纯净与明晰", color: "#E1EBEE" },
  { nameCN: "智者灰绿", nameEng: "Sage", meaning: "内省与成长", color: "#87A96B" },
  { nameCN: "常春藤语", nameEng: "Vine", meaning: "忠诚与坚韧", color: "#2F4F35" },
  { nameCN: "地平线光", nameEng: "Horizon", meaning: "远方的召唤", color: "#E3B88F" }
];

export function getRandomColor(){
    const randomIndex = Math.floor(Math.random() * LuckyColor.length);
    return LuckyColor[randomIndex];
};