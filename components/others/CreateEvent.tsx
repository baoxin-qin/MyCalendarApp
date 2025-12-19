/**
 * @file CreateEvent.tsx
 * @description Modal 组件承载的创建事件页面
 */
import { AgendaEvent, CreateEventProps } from '@/types/Properties';
import { addEvent, getUUID } from '@/utils';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import React, { useState } from 'react';
import {
    Alert,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { TimePicker } from './TimePicker';

export const CreateEvent = ({onVisibleChange}: CreateEventProps) => {
    // 状态定义
    const [title, setTitle] = useState('') // 标题
    const [location, setLocation] = useState('') // 地点
    const [comment, setComment] = useState('') // 备注
    const [startTime, setStartTime] = useState('') // 开始时间，年月日 时分秒
    const [endTime, setEndTime] = useState('') // 结束时间，年月日 时分秒

    // 时间有效性检查
    const parseTimeYMD = (time: string) => {
        const [t1, t2, t3] = time.split('-')
        return [parseInt(t1), parseInt(t2), parseInt(t3)]
    }
    const parseTimeHM = (time: string) => {
        const [t1, t2] = time.split(':')
        return [parseInt(t1), parseInt(t2)]
    }
    const isValidTime = (): boolean => {
        if (!startTime || !endTime) {
            return false
        }

        const [sYMD, sHM] = startTime.split(' ')
        const [eYMD, eHM] = endTime.split(' ')

        const [sY, sM, sD] = parseTimeYMD(sYMD)
        const [sh, sm] = parseTimeHM(sHM)
        const [eY, eM, eD] = parseTimeYMD(eYMD)
        const [eh, em] = parseTimeHM(eHM)

        const start = new Date(sY, sM-1, sD, sh, sm)
        const end = new Date(eY, eM-1, eD, eh, em)

        // 结束时间至少大于等于开始时间
        return end >= start
    }
    // 取消按钮点击事件
    const handleCancel = () => {
        onVisibleChange(false)
        Alert.alert('提示', '创建事件已取消')
    }
    // 确认并保存按钮点击事件
    const handleSave = async () => {
        if (isValidTime()) {
            const event: AgendaEvent = {
                id: '',
                title: title,
                startTime: startTime,
                endTime: endTime,
                location: location,
                comment: comment,
            }
            event.id = await getUUID()
            await addEvent(event)
            onVisibleChange(false)
            Alert.alert('提示', '创建事件成功')
        } else {
            Alert.alert('提示', '无效的时间段')
        }
    }

    return (
        <View style={styles.container} >
            {/* 顶部按钮区 */}
            <View style={{flexDirection: 'row', justifyContent: 'space-around',alignItems: 'center', width: '100%'}}>
                <TouchableOpacity
                    onPress={handleCancel}
                >
                    <Text style={{color: 'red', fontSize: 16}}>取消</Text>
                </TouchableOpacity>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>新建待办</Text>
                <TouchableOpacity
                    onPress={handleSave}
                >
                    <Text style={{color: 'green', fontSize: 16}}>保存</Text>
                </TouchableOpacity>
            </View>

            {/* 操作区 */}
            <ScrollView
                horizontal={false}
                showsVerticalScrollIndicator={false}
                style={styles.area}
            >
                {/* 标题输入框 */}
                <View style={styles.textInput}>
                    <AntDesign name='profile' size={18} color={'#000'} />
                    <Text style={styles.textTitle}>标题:</Text>
                    <TextInput
                        value={title}
                        onChangeText={setTitle}
                        placeholder='请输入标题'
                        style={styles.inputFrame}
                    />
                </View>

                {/* 时间选择框 */}
                <View style={{flexDirection: 'column', width: '100%', alignSelf: 'center', marginVertical: 5}}>
                    <Text style={{alignSelf: 'flex-start', paddingHorizontal: 10}}>
                        开始时间: (选择后请分别点击确认按钮)
                    </Text>
                    <TimePicker onTimeSelect={setStartTime} />
                </View>
                <View style={{flexDirection: 'column', width: '100%', alignSelf: 'center', marginVertical: 5}}>
                    <Text style={{alignSelf: 'flex-start', paddingHorizontal: 10} }>
                        结束时间: (选择后请分别点击确认按钮)
                    </Text>
                    <TimePicker onTimeSelect={setEndTime} />
                </View>

                {/* 地点输入框 */}
                <View style={styles.textInput}>
                    <Entypo name='location' size={18} color={'#000'} />
                    <Text style={styles.textTitle}>地点:</Text>
                    <TextInput
                        value={location}
                        onChangeText={setLocation}
                        placeholder='请输入地点'
                        style={styles.inputFrame}
                    />
                </View>

                {/* 备注输入框 */}
                <View style={styles.textInput}>
                    <AntDesign name='comment' size={18} color={'#000'} />
                    <Text style={styles.textTitle}>备注:</Text>
                    <TextInput
                        value={comment}
                        onChangeText={setComment}
                        placeholder='可以输入一些备注'
                        style={styles.inputFrame}
                    />
                </View>

                <Text style={{height: 40,fontSize: 14, color: 'darkgray', textAlign: 'center', marginVertical: 5}}>
                    {'我可是有底线的 ^ω^'}
                </Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingTop: StatusBar.currentHeight,
    },
    area: {
        width: '100%',
    },
    textInput: {
        flexDirection: 'row',
        width: '90%',
        height: 50,
        borderRadius: 5,
        backgroundColor: '#F2F2F2',
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 10,
    },
    textTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
        height: 35,
        lineHeight: 35,
    }, 
    inputFrame: {
        flex: 4,
        height: 40,
        backgroundColor: '#FFF',
        borderRadius: 5,   
    }
})