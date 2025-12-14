/**
 * @file MenuList.tsx
 * @description TopBar 右侧的菜单下拉列表组件
 */
import { MenuListProps } from '@/types/Properties';
import { useRouter } from 'expo-router';
import React from 'react';
import {
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export const MenuList = ({visible, onVisibleChange}: MenuListProps) => {
    const router = useRouter();
    // 点击弹窗外部关闭弹窗
    const handlePressOutside = () => onVisibleChange(false)
    const goToQueryEvent = () => {
        onVisibleChange(false);
        router.push('/query');
    }
    const goToAboutApp = () => {
        onVisibleChange(false);
        router.push('/introduction');
    }

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType='slide'
            onRequestClose={() => onVisibleChange(false)}
        >
            {/* 背景遮罩，点击外边关闭弹窗 */}
            <Pressable
                onPress={handlePressOutside}
                style={styles.overlay}
            >
                {/* 菜单内容列表 */}
                <View style={styles.menuContainer}>
                    <TouchableOpacity
                        onPress={goToQueryEvent}
                        style={styles.menuOption}
                    >
                        <Text style={styles.menuOptionText}>查询日程</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={goToAboutApp}
                        style={[styles.menuOption, { borderBottomWidth: 0 }]}
                    >
                        <Text style={styles.menuOptionText}>关于 App</Text>
                    </TouchableOpacity>
                </View>
            </Pressable>
        </Modal>
    )
}

const styles = StyleSheet.create({
    // 遮罩层样式
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    // 菜单容器
    menuContainer: {
        width: '65%',
        backgroundColor: '#FFF',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        alignSelf: 'center',
    },
    menuOption: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F2F2F2',
    },
    menuOptionText: {
        fontSize: 16,
        color: '#333333',
    }
})