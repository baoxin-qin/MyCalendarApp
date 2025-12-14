/**
 * @file query.tsx
 * @description 日程查询组件，一并支持：查询，修改，删除日程
 */
import { Event, QueryEventSearcgBarProps } from '@/types/Properties';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
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
const EventEntry = ({title, startTime, endTime, location, comment}: Event) => {
    return (
        <View style={styles.eventEntry}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>{title}</Text>
                <Text style={{fontSize: 14, color: '#CCC'}}>{location}</Text>
            </View>

            <Text style={{fontSize: 14, color: '#ECECEC'}}>{startTime}</Text>
            <Text style={{fontSize: 14, color: '#ECECEC'}}>{endTime}</Text>
            <Text style={{fontSize: 14, color: '#D7D7D7'}}>{comment}</Text>

            <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                <TouchableOpacity
                    style={[styles.actionBtn, {backgroundColor: 'lightgreen'}]}
                >
                    <Text style={{color: '#FFF', textAlign: 'center'}}>编辑</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.actionBtn, {backgroundColor: 'lightred'}]}
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
    const showDefault = title === '' ? true : false; // 是否显示默认内容

    return (
        <View style={styles.container}>
            <SearchBar onKeywordChange={setTitle}/>
            <ScrollView
                horizontal={false}
                showsVerticalScrollIndicator={false}
                style={{width: '100%', minHeight: 200,}}
            >
                { showDefault && (
                    <View style={styles.defaultItem}>
                        <Ionicons name='warning-outline' size={18} color={'yellow'} />
                        <Text style={{color: '#CCC'}}>未查询到该日程 / 暂无该日程</Text>
                    </View>
                )}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: StatusBar.currentHeight ?? 0 + 20,
        backgroundColor: '#FEFEFE',
    },
    searchBar: {
        width: '90%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#FDFDFD',
        borderRadius: 8,
    },
    eventEntry: {
        width: '90%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginVertical: 5,
        padding: 5,
        backgroundColor: '#FFF',
        borderRadius: 8,
    },
    actionBtn: {
        height: 30, 
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