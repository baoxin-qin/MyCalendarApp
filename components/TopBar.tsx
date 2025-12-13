/**
 * @file TopBar component
 * @description 主页面的顶部导航栏
 */
import { TopBarProps } from "@/types/Properties";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export const TopBar = ({viewShow, onViewShow}: TopBarProps) => {
    const [thisViewShow, setThisViewShow] = useState(viewShow)

    // 视图栏的显示处理
    const handleShowViewBar = () => {
        const temp = thisViewShow
        setThisViewShow(!temp)
        onViewShow(!temp)
    }

    return (
        <View style={styles.container}>
            {/* 视图切换器按钮 */}
            <TouchableOpacity 
                onPress={handleShowViewBar}
                style={styles.switcherBtn}
            >
                <AntDesign name='swap' size={25} color={'#000'} style={{alignSelf: 'center'}} />
            </TouchableOpacity>

            {/* 标题 */}
            <Text style={styles.title}>
                记录每一刻
            </Text>

            {/* 拓展按钮 */}
            <TouchableOpacity 
                style={styles.switcherBtn}
            >
                <AntDesign name='unordered-list' size={25} color={'#000'} style={{alignSelf: 'center'}} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginVertical: 10,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
    switcherBtn: {
        width: 40,
        height: 40,
        justifyContent: 'center',
    },
})