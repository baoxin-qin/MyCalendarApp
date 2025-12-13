/**
 * @file ViewSwitcher.tsx
 * @description 视图切换器组件，月视图/周视图/日视图切换
 */
import { ViewSwitcherProps } from "@/types/Properties"
import { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export const ViewSwitcher = ({choice, onChoiceChange}: ViewSwitcherProps) => {
    const [thisChoice, setThisChoice] = useState(choice)
    const handleChoiceChange = (ch: string) => {
        setThisChoice(ch)
        onChoiceChange(ch)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={()=>handleChoiceChange('month')}
                style={[styles.inactiveButton, thisChoice === 'month' ? styles.activeButton : {}]}
            >
                <Text style={[styles.text, {color: thisChoice === 'month' ? '#000000' : '#D0D0D0'}]}>月</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={()=>handleChoiceChange('week')}
                style={[styles.inactiveButton, thisChoice === 'week' ? styles.activeButton : {}]}
            >
                <Text style={[styles.text, {color: thisChoice === 'week' ? '#000000' : '#D0D0D0'}]}>周</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={()=>handleChoiceChange('day')}
                style={[styles.inactiveButton, thisChoice === 'day' ? styles.activeButton : {}]}
            >
                <Text style={[styles.text, {color: thisChoice === 'day' ? '#000000' : '#D0D0D0'}]}>日</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '60%',
        height: 35,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
    },
    inactiveButton: {
        width: '30%',
        height: '80%',
        paddingHorizontal: 5,
        justifyContent: 'center',
    },
    activeButton: {
        borderRadius: '20%',
        backgroundColor: '#FFFFFF',
    },
    text: {
        textAlign: 'center',
    }
})