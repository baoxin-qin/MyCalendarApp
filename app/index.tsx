/**
 * @file index.tsx
 * @description 日历APP的主页面
 */

import { MonthView } from "@/components/MonthView";
import { CreateEvent } from "@/components/others/CreateEvent";
import { TopBar } from "@/components/TopBar";
import { ViewSwitcher } from "@/components/ViewSwitcher";
import { WeekView } from "@/components/WeekView";
import Feather from "@expo/vector-icons/Feather";
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
    const [viewChoice, setViewChoice] = useState('month'); // 默认显示月视图
    const [showViewBar, setShowViewBar] = useState(false); // 默认不显示视图切换按钮
    const [showCreateModal, setShowCreateModal] = useState(false); // 默认不显示创建待办 Modal
    const [currentMonthDate, setCurrentMonthDate] = useState(new Date()); // 为月视图维护的日期对象
    const [currentWeekDate, setCurrentWeekDate] = useState(new Date()); // 为周视图维护的日期对象
    const [currentDayDate, setCurrentDayDate] = useState(new Date()); // 为日视图维护的日期对象

    // ----- 生命周期函数 ----- //

    // ----- 引用 ----- //

    // ----- 事件处理函数 ----- //
    const handleShowCreateModal = () => {
        setShowCreateModal(prev => !prev);
    }
    const handleResetView = () => {
        // 根据当前的显示视图，进行视图重置
        switch (viewChoice) {
            case 'month':
                setCurrentMonthDate(new Date());
                break;
            case 'week':
                setCurrentWeekDate(new Date());
                break;
            case 'day':
                setCurrentDayDate(new Date());
                break;
            default: // 不应该触发的分支
                break;
        }
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
            { viewChoice === 'month' && <MonthView thisMonth={currentMonthDate} onMonthChange={setCurrentMonthDate} /> }
            { viewChoice === 'week' &&  <WeekView thisWeek={currentWeekDate} onWeekChange={setCurrentWeekDate} /> }

            {/* 右下角添加待办事项按钮 */}
            <TouchableOpacity
                onPress={handleShowCreateModal}
                style={styles.createBtn}
            >
                <Feather name='file-plus' size={24} color={'#FFF'} style={{alignSelf: 'center'}} />
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

            {/* 右下角快速返回今日的视图页面按钮 */}
            <TouchableOpacity
                onPress={handleResetView}
                style={styles.resetBtn}
            >
                <Text style={{fontSize: 24, fontWeight: 'bold', textAlign: 'center', color: '#FFFFFF', }}>
                    今
                </Text>
            </TouchableOpacity>
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
    createBtn: {
        position: 'absolute',
        bottom: 50,
        right: 15,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'lightgreen',
        justifyContent: 'center',
    },
    resetBtn: {
        position: 'absolute',
        bottom: 130,
        right: 15,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
    }
})