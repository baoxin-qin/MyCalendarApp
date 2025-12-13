/**
 * @file MonthView.tsx
 * @description 月视图组件
 */
import { MonthViewCellProps, MonthViewMenuProps, MonthViewTableProps } from "@/types/Properties";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

/**
 * 月历菜单栏目
 */
const Menu = ({thisMonth, onMonthChange}: MonthViewMenuProps) => {
    const [month, setMonth] = useState(thisMonth)

    const handlePrevMonth = () => {
        const prevMonth = new Date(month.getFullYear(), month.getMonth() - 1, 1)
        setMonth(prevMonth)
        onMonthChange(prevMonth)
    }
    const handleNextMonth = () => {
        const nextMonth = new Date(month.getFullYear(), month.getMonth() + 1, 1)
        setMonth(nextMonth)
        onMonthChange(nextMonth)
    }

    return (
        <View style={styles.menu}>
            <TouchableOpacity onPress={handlePrevMonth}>
                <Text style={{color: 'lightgreen', fontSize: 24}}>{"<<"}</Text>
            </TouchableOpacity>
            <Text style={{fontSize: 24,}}>
                {month.getFullYear()}年{month.getMonth() + 1}月
            </Text>
            <TouchableOpacity onPress={handleNextMonth}>
                <Text style={{color: 'lightgreen', fontSize: 24}}>{">>"}</Text>
            </TouchableOpacity>
        </View>
    )
}

/**
 * 月历头部栏目，显示星期排列
 */
const Header = () => {
    const weeks = ['日', '一', '二', '三', '四', '五', '六']

    return (
        <View style={styles.header}>
            {weeks.map((week, index) => 
                <Text 
                    key={index} style={{width: '14%', textAlign: 'center',}}
                >
                    {week}
                </Text>
            )}
        </View>
    )
}

/**
 * 月历单元格
 */
const Cell = ({date, month, year}: MonthViewCellProps) => {
    const obj = new Date()
    const isToday = obj.getDate() === date &&
                    obj.getMonth() + 1 === month &&
                    obj.getFullYear() === year
    
    return (
        <TouchableOpacity
            style={[styles.cell,]}
        >
            <Text
                style={[{fontSize: 15, textAlign: 'center',}, isToday && {color: 'darkgreen', fontWeight: 'bold'}]}
            >
                {date}
            </Text>
        </TouchableOpacity>
    )
}

/**
 * 月历表格
 */
const Table = ({thisMonth}: MonthViewTableProps) => {
    const howManyDays = new Date(thisMonth.getFullYear(), thisMonth.getMonth() + 1, 0).getDate()
    const firstWeekDay = new Date(thisMonth.getFullYear(), thisMonth.getMonth(), 1).getDay()

    const array = [] // 表格二维数组
    let current = 1 // 当前添加的日期

    for (let i = 0; i < 6; i++) {
        // 最多6行
        const row = []
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstWeekDay) {
                // 第一行的空白单元格
                row.push(null)
            } else if (current <= howManyDays) {
                row.push(current)
                current ++
            }
        }
        if (current > howManyDays) {
            // 已经最后一天了，后面的单元格全部为空白，且不需要继续循环了
            const blank = 7 - row.length
            for (let k = 0; k < blank; k++) {
                row.push(null)
            }
            array.push(row)
            break
        }
        array.push(row)
    }

    return (
        <View>
            {array.map((row, rowIndex) => 
                <View key={rowIndex} style={{flexDirection: 'row'}}>
                    {row.map((cell, cellIndex) => 
                        <Cell key={cellIndex} date={cell} month={thisMonth.getMonth() + 1} year={thisMonth.getFullYear()} />
                    )}
                </View>
            )}
        </View>
    )
}

/**
 * 月视图组件
 */
export const MonthView = () => {
    const [currentDate, setCurrentDate] = useState(new Date())
    return (
        <View style={styles.container}>
            <Menu thisMonth={currentDate} onMonthChange={setCurrentDate} />
            <Header />
            <Table thisMonth={currentDate} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
    },
    menu: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderBottomWidth: 1, // 底部边框
        borderColor: '#AFAFAF',
    },
    cell: {
        width: '14%', // 一行有7个单元格，每个单元格宽度为14%
        height: 40,
        borderRadius: '100%',
        marginVertical: 5,
        justifyContent: 'center',
    }
})