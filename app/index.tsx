/**
 * @file index.tsx
 * @description 日历APP的主页面
 */

import { MonthView } from "@/components/MonthView";
import { CreateEvent } from "@/components/others/CreateEvent";
import { TopBar } from "@/components/TopBar";
import { ViewSwitcher } from "@/components/ViewSwitcher";
import React, { useState } from "react";
import {
    Dimensions,
    Modal,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

const {width: WINDOW_WIDTH, height: WINDOW_HEIGHT} = Dimensions.get('window');

export default function Homepage() {
    // ----- 状态定义 ----- //
    const [currentDate, setCurrentDate] = useState(new Date()); // 维护当前日期对象
    const [viewChoice, setViewChoice] = useState('month'); // 默认显示月视图
    const [showViewBar, setShowViewBar] = useState(false); // 默认不显示视图切换按钮
    const [showCreateModal, setShowCreateModal] = useState(false); // 默认不显示创建待办 Modal

    // ----- 生命周期函数 ----- //

    // ----- 引用 ----- //

    // ----- 事件处理函数 ----- //
    const handleShowCreateModal = () => {
        setShowCreateModal(prev => !prev);
    }


    return (
        <View style={styles.body}>
            {/* 顶部栏 */}
            <TopBar
                viewShow={showViewBar}
                onViewShow={setShowViewBar}
            />
            {/* 视图切换器(选择性显示) */}
            { 
                showViewBar &&  
                <ViewSwitcher choice={viewChoice} onChoiceChange={setViewChoice} />
            }

            {/* 视图内容 */}
            { viewChoice === 'month' && <MonthView /> }

            {/* 右下角添加待办事项按钮 */}
            <TouchableOpacity
                onPress={handleShowCreateModal}
                style={{
                    position: 'absolute',
                    bottom: 50,
                    right: 15,
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    backgroundColor: 'lightgreen',
                    justifyContent: 'center',
                }}
            >
                <Text style={{fontSize: 24, fontWeight: 'bold', textAlign: 'center', color: '#FFFFFF', }}>
                    +
                </Text>
            </TouchableOpacity>
            {/* 创建待办 Modal 组件 */}
            <Modal
                animationType='slide'
                transparent={false}
                visible={showCreateModal}
                onRequestClose={() => setShowCreateModal(false)}
            >
                <CreateEvent onVisibleChange={setShowCreateModal} />
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: WINDOW_WIDTH,
        height: WINDOW_HEIGHT,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#FEFEFE',
    },
})