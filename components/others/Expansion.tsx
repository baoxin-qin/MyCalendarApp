/**
 * @file Expansion.tsx
 * @description 月视图组件下的扩展显示区
 */
import { LuckyColor } from "@/instance/color";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useMemo } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Expansion = () => {
    // 生成今日唯一标识符
    const todayKey = useMemo(() => {
        const today = new Date()
        return `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
    }, [])

    // 基于今日标识符计算哈希值作为随机种子
    const luckyColor = useMemo(() => {
        let hash = 0
        for (let i = 0; i < todayKey.length; i++) {
            hash = ((hash << 5) - hash) + todayKey.charCodeAt(i)
            hash |= 0 // 转 32 位整数
        }

        // 哈希值随机种子
        const seed = Math.abs(hash) % LuckyColor.length
        return LuckyColor[seed]
    }, [todayKey])

    // 弹窗查看幸运色详细信息
    const handleCheckLuckyColor = () => {
        Alert.alert(
            luckyColor.name,
            `${luckyColor.color}\n${luckyColor.meaning}`
        )
    }

    return (
        <View style={styles.container}>
            <Ionicons name='color-wand' size={18} color={luckyColor.color} />
            <Text style={{color: '#888', paddingHorizontal: 5}}>{'今日幸运色: '}</Text>
            <Text style={{color: luckyColor.color, paddingHorizontal: 8}}>{luckyColor.name}</Text>
            <TouchableOpacity
                onPress={handleCheckLuckyColor}
            >
                <Ionicons name='color-palette-outline' size={24} color={luckyColor.color} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
})