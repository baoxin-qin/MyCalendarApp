/**
 * @file query.tsx
 * @description 日程查询组件，一并支持：查询，修改，删除日程
 */
import { UpdateEvent } from '@/components/others/UpdateEvent';
import { AgendaEvent, QueryEventSearcgBarProps } from '@/types/Properties';
import { deleteEvent, queryManyEvents } from '@/utils';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
    Alert,
    Modal,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

/**
 * 搜索栏组件
 */
const SearchBar = ({onKeywordChange}: QueryEventSearcgBarProps) => {
    const [content, setContent] = useState(''); // 用户输入的内容
    const router = useRouter();

    const handleTextChange = (text: string) => {
        setContent(text);
        onKeywordChange(text);
    }

    return (
        <View style={styles.searchBar}>
            <Feather name='search' size={22} color={'#000'} style={{flex: 1}}/>
            <TextInput
                placeholder='输入日程标题查询'
                value={content}
                onChangeText={val => handleTextChange(val)}
                style={{flex: 5, backgroundColor: '#FFF'}}
            />
            <TouchableOpacity 
                onPress={() => router.back()}
                style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            >
                <Text style={{textAlign: 'center', color: 'red'}}>取消</Text>
            </TouchableOpacity>
        </View>
    )
}

/**
 * 每一个日程条目的组件
 */
interface EventEntryProps extends AgendaEvent {
    onEdit: (event: AgendaEvent) => void
    onDelete: (id: string) => Promise<void>
}
const EventEntry = ({id, title, startTime, endTime, location, comment, onEdit, onDelete}: EventEntryProps) => {
    const handleDeleteEvent = async () => {
        Alert.alert(
            '提示',
            '确定删除该日程吗？',
            [
                {text: '取消', style: 'cancel'},
                {text: '确定', style: 'destructive', onPress: () => onDelete(id)}
            ]
        )
    }

    const handleEditEvent = () => {
        onEdit({id, title, startTime, endTime, location, comment})
    }

    return (
        <View style={styles.eventEntry}>
            <View style={styles.rowAlign}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>{title}</Text>
                <Text style={{fontSize: 14, color: '#CCC'}}>{location}</Text>
            </View>
            
            <View style={styles.rowAlign}>
                <Text style={styles.subText}>{startTime}</Text>
                <Text>{'--'}</Text>
                <Text style={styles.subText}>{endTime}</Text>
            </View>
            <View style={styles.rowAlign}>
                <Text style={styles.subText}>{comment}</Text>
            </View>

            <View style={styles.rowAlign}>
                <TouchableOpacity
                    onPress={handleEditEvent}
                    style={[styles.actionBtn, {backgroundColor: 'lightgreen'}]}
                >
                    <Text style={{color: '#FFF', textAlign: 'center'}}>编辑</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleDeleteEvent}
                    style={[styles.actionBtn, {backgroundColor: '#FFCCCC'}]}
                >
                    <Text style={{color: '#FFF', textAlign: 'center'}}>删除</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

/**
 * 日程查询组件
 */
export default function QueryEvent() {
    const [title, setTitle] = useState('');
    const [events, setEvents] = useState<AgendaEvent[]>([]);
    const [selectedEvent, setSelectedEvent] = useState<AgendaEvent | null>(null);
    const [showUpdateModal, setShowUpdateModal] = useState(false);

    // 渲染防抖定时器
    const [debouceTimer, setDebounceTimer] = useState<number | null>(null);

    const handleDelete = async (id: string) => {
        const result = await deleteEvent(id);
        if (result) {
            Alert.alert('提示', '删除成功');
            setEvents(prev => prev.filter(event => event.id !== id))
        } else {
            Alert.alert('提示', '删除失败');
        }
    }
    const handleEdit = (event: AgendaEvent) => {
        setSelectedEvent(event)
        setShowUpdateModal(true)
    }

    useEffect(() => {
        // 清除上一个定时器
        if (debouceTimer) {
            clearTimeout(debouceTimer);
        }
        // 开启新的定时器，300ms 后执行查询
        const timer = setTimeout(async () => {
            try {
                if (title.trim() !== ''){
                    const rows = await queryManyEvents(title);
                    setEvents(rows || [])
                } else {
                    setEvents([]);
                }
            } catch (error) {
                setEvents([]);
            }
        }, 300);
        setDebounceTimer(timer);
        return () => clearTimeout(timer);
    }, [title])

    return (
        <View style={styles.container}>
            <SearchBar onKeywordChange={setTitle}/>
            <ScrollView
                horizontal={false}
                showsVerticalScrollIndicator={false}
                style={{width: '100%', minHeight: 200,}}
            >
                { events.length === 0 ? 
                    (
                        <View style={styles.defaultItem}>
                            <Ionicons name='warning-outline' size={18} color={'yellow'} />
                            <Text style={{color: '#CCC'}}>未查询到该日程 / 暂无该日程</Text>
                        </View>
                    ) : 
                    (
                        events.map(event => (
                            <EventEntry
                                key={event.id}
                                {...event}
                                onEdit={handleEdit}
                                onDelete={handleDelete}
                            />
                        ))
                    )
                }
            </ScrollView>

            {/* 更新事件的 Modal 弹窗 */}
            <Modal
                visible={showUpdateModal}
                animationType='slide'
                transparent={true}
                onRequestClose={() => setShowUpdateModal(false)}
            >
                <UpdateEvent
                    {...selectedEvent!}
                    onVisibleChange={setShowUpdateModal}
                />
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#EDEDED',
    },
    searchBar: {
        width: '90%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#EDEDED',
        borderRadius: 8,
        marginVertical: 10,
    },
    eventEntry: {
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginVertical: 5,
        padding: 5,
        backgroundColor: '#FFF',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
    },
    rowAlign: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginVertical: 5,
    },
    subText: {
        fontSize: 14,
        color: '#C0C0C0',
        marginVertical: 3,
    },
    actionBtn: {
        height: 30, 
        width: 80,
        borderRadius: 8, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    defaultItem: {
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 5,
    }
})