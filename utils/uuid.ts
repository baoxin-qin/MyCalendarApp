/**
 * @file UUID generator
 * @description 基于 expo-crypto 库实现获取 UUID v4，适配数据库的主键生成
 * @returns {string} UUID v4 应当符合 RFC 4122 标准
 */
import * as Crypto from 'expo-crypto'

export const getUUID = async (): Promise<string> => {
    // 先生成 16 字节的随机数 (uuid v4 为128位数据)
    const randomBytes = await Crypto.getRandomBytesAsync(16)
    // 按 UUID v4 规则修改特定位
    randomBytes[6] = (randomBytes[6] & 0x0f) | 0x40 // uuid v4 的版本号为 4
    randomBytes[8] = (randomBytes[8] & 0x3f) | 0x80 // uuid v4 的 变体位为 10

    // 转换16进制字符串
    const uuid = Array.from(randomBytes)
        .map(byte => byte.toString(16).padStart(2, '0'))
        .join('')
        .replace(/^(.{8})(.{4})(.{4})(.{4})(.{12})$/, '$1-$2-$3-$4-$5')
    return uuid
}