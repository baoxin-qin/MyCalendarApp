/**
 * @file UpdateEvent.tsx
 * @description 日程事件编辑组件
 */
import { AgendaEvent, UpdateEventProps } from "@/types/Properties";
import { updateEvent } from "@/utils";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { useState } from "react";
import {
    Alert,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { TimePicker } from "./TimePicker";

export const UpdateEvent = ({
    id,
    title, 
    location, 
    comment, 
    onVisibleChange,
    onUpdateSuccess
}: UpdateEventProps) => {
    const [newTitle, setNewTitle] = useState(title);
    const [newLocation, setNewLocation] = useState(location);
    const [newComment, setNewComment] = useState(comment);
    const [newStartTime, setNewStartTime] = useState('');
    const [newEndTime, setNewEndTime] = useState('');

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
        if (!newStartTime || !newEndTime) {
            return false
        }
        const [sYMD, sHM] = newStartTime.split(' ')
        const [eYMD, eHM] = newEndTime.split(' ')

        const [sY, sM, sD] = parseTimeYMD(sYMD)
        const [sh, sm] = parseTimeHM(sHM)
        const [eY, eM, eD] = parseTimeYMD(eYMD)
        const [eh, em] = parseTimeHM(eHM)

        const start = new Date(sY, sM-1, sD, sh, sm)
        const end = new Date(eY, eM-1, eD, eh, em)

        // 结束时间至少大于等于开始时间
        return end >= start
    }

    const handleCancel = () => {
        onVisibleChange(false);
        Alert.alert('提示', '编辑事件已取消')
    }
    const handleSave = async () => {
        if (isValidTime()) {
            const newEvent: AgendaEvent = {
                id: id,
                title: newTitle === null ? '默认事件' : newTitle,
                startTime: newStartTime,
                endTime: newEndTime,
                location: newLocation,
                comment: newComment
            }
            const result = await updateEvent(newEvent);
            if (result) {
                Alert.alert('提示', '修改事件成功')
                onUpdateSuccess()
            } else {
                Alert.alert('提示', '修改事件失败')
            }
            onVisibleChange(false);
        } else {
            Alert.alert('提示', '无效的时间选择')
        }
    }

    return (
        <View style={styles.container}>
            {/* 顶部栏目 */}
            <View style={{flexDirection: 'row', justifyContent: 'space-around',alignItems: 'center', width: '100%'}}>
                <TouchableOpacity
                    onPress={handleCancel}
                >
                    <Text style={{color: 'red', fontSize: 16}}>取消</Text>
                </TouchableOpacity>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>日程编辑</Text>
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
                style={{width: '100%'}}
            >
                {/* 标题输入框 */}
                <View style={styles.textInput}>
                    <AntDesign name='profile' size={18} color={'#000'} />
                    <Text style={styles.textTitle}>标题:</Text>
                    <TextInput
                        value={newTitle !== null ? newTitle : '默认事件'}
                        onChangeText={setNewTitle}
                        placeholder='请输入标题'
                        style={styles.inputFrame}
                    />
                </View>

                {/* 时间选择框 */}
                <View style={{flexDirection: 'column', width: '100%', alignSelf: 'center', marginVertical: 5}}>
                    <Text style={{alignSelf: 'flex-start', paddingHorizontal: 10}}>
                        开始时间: (选择后请分别点击确认按钮)
                    </Text>
                    <TimePicker onTimeSelect={setNewStartTime} />
                </View>
                <View style={{flexDirection: 'column', width: '100%', alignSelf: 'center', marginVertical: 5}}>
                    <Text style={{alignSelf: 'flex-start', paddingHorizontal: 10} }>
                        结束时间: (选择后请分别点击确认按钮)
                    </Text>
                    <TimePicker onTimeSelect={setNewEndTime} />
                </View>

                {/* 地点输入框 */}
                <View style={styles.textInput}>
                    <Entypo name='location' size={18} color={'#000'} />
                    <Text style={styles.textTitle}>地点:</Text>
                    <TextInput
                        value={newLocation !== null ? newLocation : ''}
                        onChangeText={setNewLocation}
                        placeholder='请输入地点'
                        style={styles.inputFrame}
                    />
                </View>

                {/* 备注输入框 */}
                <View style={styles.textInput}>
                    <AntDesign name='comment' size={18} color={'#000'} />
                    <Text style={styles.textTitle}>备注:</Text>
                    <TextInput
                        value={newComment !== null ? newComment : ''}
                        onChangeText={setNewComment}
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
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#FFF',
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