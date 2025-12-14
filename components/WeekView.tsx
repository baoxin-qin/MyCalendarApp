/**
 * @file WeekView.tsx
 * @description 周视图组件
 */
import { WeekViewEntryProps, WeekViewMenuProps, WeekViewProps } from '@/types/Properties';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

/**
 * 周视图菜单栏组件
 */
const Menu = ({thisWeek, onWeekChange}: WeekViewMenuProps) => {
    // 计算当周日期范围
    const getWeekRange = (base: Date) => {
        const day = base.getDay() || 7 // 星期天转换为7
        const monday = new Date(base)
        monday.setDate(base.getDate() - day + 1)
        const sunday = new Date(monday)
        sunday.setDate(monday.getDate() + 6)
        return {monday, sunday}
    }
    // 切换上一周
    const handlePrevWeek = () => {
        const prevWeek = new Date(thisWeek)
        prevWeek.setDate(prevWeek.getDate() - 7) // 前推7天
        onWeekChange(prevWeek)
    }
    // 切换下一周
    const handleNextWeek = () => {
        const nextWeek = new Date(thisWeek)
        nextWeek.setDate(nextWeek.getDate() + 7) // 后推7天
        onWeekChange(nextWeek)
    }

    const {monday, sunday} = getWeekRange(thisWeek)

    return (
        <View style={styles.menu}>
            <TouchableOpacity onPress={handlePrevWeek}>
                <Text style={{color: 'lightgreen', fontSize: 22}}>{'⋀'}</Text>
            </TouchableOpacity>
            <Text style={{fontSize: 18,}}>
                {monday.getMonth() + 1}月{monday.getDate()}日 -- {sunday.getMonth() + 1}月{sunday.getDate()}日
            </Text>
            <TouchableOpacity onPress={handleNextWeek}>
                <Text style={{color: 'lightgreen', fontSize: 22}}>{'⋁'}</Text>
            </TouchableOpacity>
        </View>
    )
}

/**
 * 周视图条目组件
 */
const Entry = ({name, date, title}: WeekViewEntryProps) => {
    return (
        <View style={styles.entry}>
            <Text style={{fontWeight: 'bold', flex: 1, textAlign: 'center'}}>{name}</Text>
            <Text style={{flex: 1, textAlign: 'center'}}>{date}</Text>
            <TouchableOpacity
                style={{
                    flex: 5,
                    height: 40,
                    backgroundColor: '#EFEFEF',
                    borderRadius: 5,
                    justifyContent: 'center',
                }}
            >
                <Text style={{textAlign: 'left', paddingLeft: 5,}}>{title || '暂无内容'}</Text>
            </TouchableOpacity>
        </View>
    )
}

/**
 * 周视图组件
 */
export const WeekView = ({thisWeek, onWeekChange}: WeekViewProps) => {
    const [weekDays, setWeekDays] = useState<Date[]>([])
    useEffect(() => {
        const day = thisWeek.getDay() || 7 // 星期天转换为7
        const monday = new Date(thisWeek)
        monday.setDate(thisWeek.getDate() - day + 1)

        const days = []
        for (let i = 0; i < 7; i++) {
            const date = new Date(monday)
            date.setDate(monday.getDate() + i)
            days.push(date)
        }
        setWeekDays(days)
    }, [thisWeek])

    const weekNames = ['Ⅶ', 'Ⅰ', 'Ⅱ', 'Ⅲ', 'Ⅳ', 'Ⅴ', 'Ⅵ']

    return (
        <View style={styles.container}>
            <Menu thisWeek={thisWeek} onWeekChange={onWeekChange} />
            <View style={[styles.entry, {borderBottomWidth: 1, borderColor: '#EFEFEF'}]}>
                <Text style={{flex: 1, textAlign: 'center'}}>星期</Text>
                <Text style={{flex: 1, textAlign: 'center'}}>日期</Text>
                <Text style={{flex: 5, textAlign: 'center'}}>日程</Text>
            </View>
            {weekDays.map((day, index) => (
                <Entry
                    key={index}
                    name={weekNames[day.getDay()]}
                    date={day.getDate()}
                    title={'待定'}
                />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 5,
    },
    menu: {
        flexDirection: 'row',
        width: '80%',
        height: 40,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    entry: {
        flexDirection: 'row',
        width: '100%',
        height: 40,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginVertical: 5,
    }
})