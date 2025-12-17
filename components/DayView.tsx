/**
 * @file DayView.tsx
 * @description 日视图组件
 */  
import { DayEntryProps, DayViewMenuProps, DayViewProps } from '@/types/Properties';
import { queryOneEventByHour } from '@/utils';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

/**
 * 日视图菜单组件
 */
const Menu = ({thisDay, onDayChange}: DayViewMenuProps) => {
    const handlePrevDay = () => {
        const prevDay = new Date(thisDay);
        prevDay.setDate(prevDay.getDate() - 1);
        onDayChange(prevDay);
    }
    const handleNextDay = () => {
        const nextDay = new Date(thisDay);
        nextDay.setDate(nextDay.getDate() + 1);
        onDayChange(nextDay);
    }

    return (
        <View style={styles.menu}>
            <TouchableOpacity
                onPress={handlePrevDay}
            >
                <Text style={{fontSize: 24, color: '#000'}}>{'<'}</Text>
            </TouchableOpacity>
            <Text style={{fontSize: 20}}>
                {thisDay.getMonth() + 1}月{thisDay.getDate()}日
            </Text>
            <TouchableOpacity
                onPress={handleNextDay}
            >
                <Text style={{fontSize: 24, color: '#000'}}>{'>'}</Text>
            </TouchableOpacity>
        </View>
    )
}

/**
 * 日视图条目组件
 */
const Entry = ({time, title}: DayEntryProps) => {
    return (
        <View style={styles.entry}>
            <Text style={{flex: 1, textAlign: 'center'}}>
                {time.toString().padStart(2, '0') + ':00'}
            </Text>
            <TouchableOpacity
                style={{
                    flex: 4, 
                    height: 40,
                    justifyContent: 'center',
                    borderRadius: 5,
                    backgroundColor: '#EFEFEF',
                }}
            >
                <Text style={{textAlign: 'left', paddingLeft: 5}}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

/**
 * 日视图组件
 */
export const DayView = ({thisDay, onDayChange}: DayViewProps) => {
    const [eventTitles, setEventTitles] = useState<string[]>([])

    const list:number[] = []
    for (let i = 0; i <= 23; i++) {
        list.push(i)
    }

    useEffect(() => {
        const formatTime = (date: Date, hour: number) => {
            const year = date.getFullYear().toString()
            const month = (date.getMonth() + 1).toString().padStart(2, '0')
            const day = date.getDate().toString().padStart(2, '0')
            const hourStr = hour.toString().padStart(2, '0')
            return `${year}-${month}-${day} ${hourStr}`
        }

        const fetchEventTitles = async () => {
            if (list.length === 0) return

            const titleList = await Promise.all(
                list.map(async hour => {
                    const event = await queryOneEventByHour(formatTime(thisDay, hour))
                    return event ? event.title : '--'
                })
            )
            setEventTitles(titleList)
        }

        fetchEventTitles()
    }, [thisDay, list])

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{width: '100%'}}
        >
            <View style={styles.container}>
                <Menu thisDay={thisDay} onDayChange={onDayChange} />
                {list.map((time, index) => (
                    <Entry key={index} time={time} title={eventTitles[index]} />
                ))}
                <Text style={{height: 40,color: 'darkgray', fontSize: 14, textAlign: 'center', marginVertical: 10}}>
                    {'我可是有底线的 >_<'}
                </Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    menu: {
        width: '80%',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    entry: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginVertical: 5,
    }
})