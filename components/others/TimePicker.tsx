/**
 * @file TimePickers.tsx
 * @description 时间选择器组件，包括日期选择器和时间选择器
 */
import { TimePickerProps } from "@/types/Properties";
import { Picker } from "@react-native-picker/picker";
import React, { useEffect, useMemo, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// 年月日的时间选择器
export const TimePickerYMD = ({onTimeSelect}: TimePickerProps) => {
    const now = new Date(); // 选择器默认选择当前时间
    const [year, setYear] = useState(now.getFullYear());
    const [month, setMonth] = useState(now.getMonth()+1);
    const [day, setDay] = useState(now.getDate());

    // 计算当月最大天数 (适配不同月份的天数)
    const getMaxMonthDays = (year: number, month: number) => {
        return new Date(year, month, 0).getDate();
    }
    
    // 实际显示的日期天数应该具体到月份
    useEffect(() => {
        const maxDays = getMaxMonthDays(year, month)
        if (day > maxDays) {
            setDay(maxDays)
        }
    }, [year, month])

    // 年份选择，接下来的5年
    const yearList = useMemo(() => {
        const list = []
        for (let i = year; i < year + 5; i++) {
            list.push(
                <Picker.Item key={i} label={i.toString()} value={i} />
            )
        }
        return list;
    }, [])
    // 月份选择，1-12月
    const monthList = useMemo(() => {
        const list = []
        for (let i = 1; i <= 12; i++) {
            list.push(
                <Picker.Item key={i} label={i.toString()} value={i} />
            )
        }
        return list;
    }, [])
    // 日期选择，根据月份选择动态变化
    const dayList = useMemo(() => {
        const maxDays = getMaxMonthDays(year, month)
        const list = []
        for (let i = 1; i <= maxDays; i++) {
            list.push(
                <Picker.Item key={i} label={i.toString()} value={i} />
            )
        }
        return list;
    }, [year, month])

    // 确认日期的回调函数
    const handleConfirm = () => {
        const timeYMD = `${year}-${month}-${day}`
        onTimeSelect(timeYMD)
    }

    return (
        <View style={styles.column}>
            <Picker
                selectedValue={year}
                onValueChange={val => setYear(val)}
                style={styles.picker}
            >
                {yearList}
            </Picker>
            <Picker
                selectedValue={month}
                onValueChange={val => setMonth(val)}
                style={styles.picker}
            >
                {monthList}
            </Picker>
            <Picker
                selectedValue={day}
                onValueChange={val => setDay(val)}
                style={styles.picker}
            >
                {dayList}
            </Picker>
            <TouchableOpacity
                onPress={handleConfirm}
                style={{
                    width: 100,
                    height: 40,
                    backgroundColor: 'lightgreen',
                    borderRadius: 20,
                    justifyContent: 'center',
                }}
            >
                <Text style={{color: '#FFFFFF', textAlign: 'center',}}>
                    确认
                </Text>
            </TouchableOpacity>
        </View>
    )
}

// 时分的时间选择器
export const TimePickerHM = ({onTimeSelect}: TimePickerProps) => {
    const now = new Date(); // 选择器默认选择当前时间
    const [hour, setHour] = useState(now.getHours());
    const [minute, setMinute] = useState(now.getMinutes());

    // 时钟选择，0-23时
    const hourList = useMemo(() => {
        const list = []
        for (let i = 0; i <= 23; i++) {
            list.push(
                <Picker.Item key={i} label={i.toString()} value={i} />
            )
        }
        return list
    }, [])
    // 分钟选择，0-59分
    const minuteList = useMemo(() => {
        const list = []
        for (let i = 0; i <= 59; i++) {
            list.push(
                <Picker.Item key={i} label={i.toString()} value={i} />
            )
        }
        return list
    }, [])

    // 确认时间的回调函数
    const handleConfirm = () => {
        const timeHM = `${hour}:${minute}`
        onTimeSelect(timeHM)
    }

    return (
        <View style={styles.column}>
            <Picker
                selectedValue={hour}
                onValueChange={val => setHour(val)}
                style={styles.picker}
            >
                {hourList}
            </Picker>
            <Picker
                selectedValue={minute}
                onValueChange={val => setMinute(val)}
                style={styles.picker}
            >
                {minuteList}
            </Picker>
            <TouchableOpacity
                onPress={handleConfirm}
                style={{
                    width: 100,
                    height: 40,
                    backgroundColor: 'lightgreen',
                    borderRadius: 20,
                    justifyContent: 'center',
                }}
            >
                <Text style={{color: '#FFFFFF', textAlign: 'center',}}>
                    确认
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    column: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    picker: {
        width: 120,
        height: 60,
    }
})