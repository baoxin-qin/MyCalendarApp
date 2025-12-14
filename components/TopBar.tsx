/**
 * @file TopBar component
 * @description 主页面的顶部导航栏
 */
import { TopBarProps } from "@/types/Properties";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MenuList } from "./others/MenuList";


export const TopBar = ({viewShow, onViewShow}: TopBarProps) => {
    const [thisViewShow, setThisViewShow] = useState(viewShow) // 外部组件视图切换器的显示状态
    const [showMenu, setShowMenu] = useState(false) // 右侧菜单按钮的显示状态

    // 视图栏的显示处理
    const handleShowViewBar = () => {
        const temp = thisViewShow
        setThisViewShow(!temp)
        onViewShow(!temp)
    }
    // 右侧菜单按钮的显示处理
    const handleShowMenu = () => setShowMenu(!showMenu)

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
                {"「迹·录」每一刻"}
            </Text>

            {/* 拓展按钮 */}
            <TouchableOpacity
                onPress={handleShowMenu}
                style={styles.switcherBtn}
            >
                <AntDesign name='unordered-list' size={25} color={'#000'} style={{alignSelf: 'center'}} />
            </TouchableOpacity>
            {/* 右侧菜单 */}
            <MenuList
                visible={showMenu}
                onVisibleChange={setShowMenu}
            />
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