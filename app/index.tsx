/**
 * @file index.tsx
 * @description 日历APP的主页面
 */

import { DayView, MonthView, TopBar, ViewSwitcher, WeekView } from "@/components";
import { CreateEvent } from "@/components/others/CreateEvent";
import { initDB, initTable } from "@/utils";
import Feather from "@expo/vector-icons/Feather";
import React, { useEffect, useRef, useState } from "react";
import {
    Animated,
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
    // ----- State 定义 ----- //
    const [viewChoice, setViewChoice] = useState('month'); // 默认显示月视图
    const [showViewBar, setShowViewBar] = useState(false); // 默认不显示视图切换按钮
    const [showCreateModal, setShowCreateModal] = useState(false); // 默认不显示创建待办 Modal
    const [currentMonthDate, setCurrentMonthDate] = useState(new Date()); // 为月视图维护的日期对象
    const [currentWeekDate, setCurrentWeekDate] = useState(new Date()); // 为周视图维护的日期对象
    const [currentDayDate, setCurrentDayDate] = useState(new Date()); // 为日视图维护的日期对象

    // ----- useEffect 定义 ----- //
    // 初始化数据库表
    useEffect(() => {
        const initialize = async () => {
            await initDB()
            await initTable()
        }
        initialize()
    }, [])

    // ----- useRef 定义 ----- //
    // 视图切换器 ViewSwitcher 的切换动画效果
    const viewBarOpacity = useRef(new Animated.Value(0)).current
    const viewBarHeight = useRef(new Animated.Value(0)).current
    // 视图的切换动画效果

    // ----- 事件处理函数 ----- //
    const handleViewBarShow = (visible: boolean) => {
        setShowViewBar(visible)
        // 执行动画
        Animated.parallel([
            Animated.timing(viewBarOpacity, {
                toValue: visible ? 1 : 0, // 显示或隐藏
                duration: 300, // 动画时间 300 ms
                useNativeDriver: false, // 使用原生动画驱动
            }),
            Animated.timing(viewBarHeight, {
                toValue: visible ? 35 : 0, // 35 是 ViewSwitcher 的高度(详见 ViewSwitcher.tsx)
                duration: 300,
                useNativeDriver: false, // 高度变化不能使用原生动画驱动
            }),
        ]).start()
    }
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
                onViewShow={handleViewBarShow}
            />
            {/* 视图切换器(选择性显示) */}
            <Animated.View
                style={{
                    opacity: viewBarOpacity,
                    height: viewBarHeight,
                    overflow: 'hidden', // 防止溢出
                }}
            >
                <ViewSwitcher choice={viewChoice} onChoiceChange={setViewChoice} />
            </Animated.View>

            {/* 视图内容 */}
            { viewChoice === 'month' && <MonthView thisMonth={currentMonthDate} onMonthChange={setCurrentMonthDate} /> }
            { viewChoice === 'week' &&  <WeekView thisWeek={currentWeekDate} onWeekChange={setCurrentWeekDate} /> }
            { viewChoice === 'day' && <DayView thisDay={currentDayDate} onDayChange={setCurrentDayDate} /> }

            {/* 右下角添加待办事项按钮 */}
            <TouchableOpacity
                onPress={handleShowCreateModal}
                style={styles.createBtn}
            >
                <Feather name='file-plus' size={24} color={'#000'} style={{alignSelf: 'center'}} />
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
        borderWidth: 1,
        borderRadius: 25,
        borderColor: '#000',
        backgroundColor: '#FFF',
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