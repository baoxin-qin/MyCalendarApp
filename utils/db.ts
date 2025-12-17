/**
 * @file db.ts
 * @description 数据库 sqlite 工具函数
 */
import { AgendaEvent } from '@/types/Properties';
import * as SQLite from 'expo-sqlite';


// 创建/打开数据库
let db: SQLite.SQLiteDatabase;

// 数据库初始化连接
export const initDB = async () => {
    if (!db) {
        db = await SQLite.openDatabaseAsync('CalendarApp.db');
    }
    return db;
}

// 创建表
export const initTable = async () => {
    const db = await initDB()
    try {
        await db.execAsync(
            `CREATE TABLE IF NOT EXISTS Agenda (
                id TEXT PRIMARY KEY,
                title TEXT NOT NULL,
                startTime TEXT,
                endTime TEXT,
                location TEXT,
                comment TEXT
            );`
        )
        return true
    } catch (error) {
        return false
    }
}

// (单条)数据插入
export const addEvent = async (event: AgendaEvent) => {
    const db = await initDB()
    try {
        const result = await db.runAsync(
            `INSERT INTO Agenda VALUES (?, ?, ?, ?, ?, ?)`,
            [event.id, event.title, event.startTime, event.endTime, event.location, event.comment]
        )
        if (result.changes === 1) {
            return true
        }
    } catch (error) {
        return false
    }
}

// (单条)数据更新
export const updateEvent = async (event: AgendaEvent) => {
    const db = await initDB()
    try {
        const result = await db.runAsync(
            `UPDATE Agenda SET 
                title = ?,
                startTime = ?,
                endTime = ?,
                location = ?,
                comment = ?
            WHERE id = ? ;`,
            [event.title, event.startTime, event.endTime, event.location, event.comment, event.id]
        )
        if (result.changes === 1) {
            return true
        }
    } catch (error) {
        return false
    }
}

// (单条)数据删除
export const deleteEvent = async (id: string) => {
    const db = await initDB()
    try {
        const result = await db.runAsync(
            `DELETE FROM Agenda WHERE id = ? ;`,
            id
        )
        if (result.changes === 1) {
            return true
        }
    } catch (error) {
        return false
    }
}

// 查询默认 (查询 5 条即可)
export const queryDefault = async (): Promise<AgendaEvent[] | null> => {
    const db = await initDB()
    try {
        const rows: AgendaEvent[] | null = await db.getAllAsync(
            `SELECT * FROM Agenda LIMIT 5;`
        )
        return rows
    } catch (error) {
        return null
    }
}

// 单查询 (按标题关键字查)
export const queryOneEvent = async (keyword: string): Promise<AgendaEvent | null> => {
    const db = await initDB()
    try {
        const firstRow: AgendaEvent | null = await db.getFirstAsync(
            `SELECT * FROM Agenda WHERE title like ?;`,
            `%${keyword}%`
        )
        return firstRow
    } catch (error) {
        return null
    }
}

// 批查询 (按标题关键字查)
export const queryManyEvents = async (keyword: string): Promise<AgendaEvent[] | null> => {
    const db = await initDB()
    try {
        const rows: AgendaEvent[] | null = await db.getAllAsync(
            `SELECT * FROM Agenda WHERE title like ?;`,
            `%${keyword}%`
        )
        return rows
    } catch (error) {
        return null
    }
}

// 按日期 YYYY-MM-DD 查询
// 单查询，适配周视图
export const queryOneEventByDate = async (time: string): Promise<AgendaEvent | null> => {
    const db = await initDB()
    try {
        const firstRow: AgendaEvent | null = await db.getFirstAsync(
            `SELECT * FROM Agenda WHERE startTime LIKE ?;`,
            `${time}%`, // 这个 time 实际上是 YYYY-MM-DD 的格式，不考虑后面的时分，进行模糊查询
        )
        return firstRow
    } catch (error) {
        return null
    }
}
// 多查询
export const queryManyEventsByDate = async (time: string): Promise<AgendaEvent[] | null> => {
    const db = await initDB()
    try {
        const rows: AgendaEvent[] | null = await db.getAllAsync(
            `SELECT * FROM Agenda WHERE startTime LIKE ?;`,
            `${time}%`, 
        )
        return rows
    } catch (error) {
        return null
    }
}

// 适配日视图的查询 (单查询)
export const queryOneEventByHour = async (time: string): Promise<AgendaEvent | null> => {
    const db = await initDB()
    try {
        const firstRow: AgendaEvent | null = await db.getFirstAsync(
            `SELECT * FROM Agenda WHERE startTime LIKE ?;`,
            `${time}%`, // 这个 time 实际上是 YYYY-MM-DD hh 的格式，不考虑最后的分，进行模糊查询
        )
        return firstRow
    } catch (error) {
        return null
    }
}