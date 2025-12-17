/**
 * @file Properties.ts
 * @description 组件的 props 类型定义文件
 */

/**
 * @interface TopBarProps
 * @description 顶部导航栏的 props 类型定义
 * @property {boolean} viewShow - 视图切换器是否显示
 * @property {(show: boolean) => void} onViewShow - 视图切换器显示状态切换的回调函数
 */
export interface TopBarProps {
    viewShow: boolean
    onViewShow: (show: boolean) => void
}

/**
 * @interface ViewSwitcherProps
 * @description 视图切换器的 props 类型定义
 * @property {string} choice - 当前视图的选择
 * @property {(choice: string) => void} onChoiceChange - 视图选择变化的回调函数
 */
export interface ViewSwitcherProps {
    choice: string
    onChoiceChange: (choice: string) => void
}

// ---------- 视图区 Props 类型定义 ---------- //

/**
 * @interface MonthViewMenuProps
 * @description 月视图菜单的 props 类型定义
 * @property {Date} thisMonth - 当前月份
 * @callback onMonthChange - 月份选择变化的回调函数
 */
export interface MonthViewMenuProps {
    thisMonth: Date
    onMonthChange: (date: Date) => void
}

/**
 * @interface MonthViewCellProps
 * @description 月视图表格单元格的 props 类型定义
 * @property {number | null} date - 日期
 * @property {number} month - 月份
 * @property {number} year - 年份
 */
export interface MonthViewCellProps {
    date: number | null
    month: number
    year: number
}

/**
 * @interface MonthViewTableProps
 * @description 月视图表格的 props 类型定义
 * @property {Date} thisMonth - 当前月份
 */
export interface MonthViewTableProps {
    thisMonth: Date
}

/**
 * @interface MonthViewProps
 * @description 月视图的 props 类型定义
 * @property {Date} thisMonth - 当前月份
 * @callback onMonthChange - 月份选择变化的回调函数
 */
export interface MonthViewProps {
    thisMonth: Date
    onMonthChange: (date: Date) => void
}

/**
 * @interface WeekViewMenuProps
 * @description 周视图菜单的 props 类型定义
 * @property {Date} thisWeek - 当前周的时间对象
 * @callback onWeekChange - 周选择变化的回调函数
 */
export interface WeekViewMenuProps {
    thisWeek: Date
    onWeekChange: (date: Date) => void
}

/**
 * @interface WeekViewEntryProps
 * @description 周视图事件条目的 props 类型定义
 * @property {string} name - 星期的名称
 * @property {number} date - 日期
 * @property {string} title - 事件标题
 */
export interface WeekViewEntryProps {
    name: string
    date: number
    title: string
}

/**
 * @interface WeekViewProps
 * @description 周视图的 props 类型定义
 * @property {Date} thisWeek - 当前周的时间对象
 * @callback onWeekChange - 周选择变化的回调函数
 */
export interface WeekViewProps {
    thisWeek: Date
    onWeekChange: (date: Date) => void
}

/**
 * @interface DayViewMenuProps
 * @description 日视图菜单的 props 类型定义
 * @property {Date} thisDay - 当前日的时间对象
 * @callback onDayChange - 日选择变化的回调函数
 */
export interface DayViewMenuProps {
    thisDay: Date
    onDayChange: (date: Date) => void
}

/**
 * @interface DayEntryProps
 * @description 日视图事件条目的 props 类型定义
 * @property {number} time - 时间节点
 * @property {string} title - 事件标题
 */
export interface DayEntryProps {
    time: number
    title: string
}

/**
 * @interface DayViewProps
 * @description 日视图的 props 类型定义
 * @property {Date} thisDay - 当前日的时间对象
 * @callback onDayChange - 日选择变化的回调函数
 */
export interface DayViewProps {
    thisDay: Date
    onDayChange: (date: Date) => void
}

// ---------- 其他组件 Props 类型定义 ---------- //

/**
 * @interface TimePickerProps
 * @description 时间选择器的 props 类型定义
 * @callback onTimeChange - 时间选择并确认后的回调函数
 */
export interface TimePickerProps {
    onTimeSelect: (time: string) => void
}

/**
 * @interface CreateEventProps
 * @description 创建事件的 props 类型定义
 * @callback onVisibleChange - 弹窗显示状态变化的回调函数
 */
export interface CreateEventProps {
    onVisibleChange: (visible: boolean) => void
}

/**
 * @interface UpdateEventProps
 * @description 更新事件的 props 类型定义
 * @property {string} title - 旧的事件标题
 * @property {string | null} startTime - 旧的事件开始时间
 * @property {string | null} endTime - 旧的的事件结束时间
 * @property {string | null} location - 旧的事件地点
 * @property {string | null} comment - 旧的事件备注
 * @callback onVisibleChange - 弹窗显示状态变化的回调函数
 * @callback onUpdateSuccess - 如果修改成功，则通知父组件刷新日程事件列表
 */
export interface UpdateEventProps {
    id: string
    title: string | null
    location: string | null
    comment: string | null
    onVisibleChange: (visible: boolean) => void
    onUpdateSuccess: () => void
}

/**
 * @interface QueryEventSearcgBarProps
 * @description 查询事件搜索栏的 props 类型定义
 * @callback onKeywordChange - 搜索关键词变化的回调函数
 */
export interface QueryEventSearcgBarProps {
    onKeywordChange: (keyword: string) => void
}

/**
 * @interface MenuListProps
 * @description 菜单按钮列表的 props 类型定义
 * @property {boolen} visible - 菜单是否显示
 * @callback onVisibleChange - 菜单显示状态变化的回调函数
 */
export interface MenuListProps {
    visible: boolean
    onVisibleChange: (visible: boolean) => void
}

// ---------- 日程事件数据结构 ---------- //
/**
 * @interface AgendaEvent
 * @description 日程事件数据结构
 * @property {string} id - 日程 ID
 * @property {string} title - 日程标题
 * @property {string | null} startTime - 日程开始时间
 * @property {string | null} endTime - 日程结束时间
 * @property {string | null} location - 日程地点
 * @property {string | null} comment - 日程备注
 * @example
 * {
 *   id: 'aaa-bbb-ccc-ddd-eee', // 基于 uuid v4 生成
 *   title: '开会',
 *   startTime: '2022-01-01 10:00:00',
 *   endTime: '2022-01-01 11:00:00',
 *   location: '会议室A',
 *   comment: '讨论项目进展',
 * }
 * 时间采用 ISO 格式字符串 YYYY-MM-DD hh:mm:ss
 * 其他可以没有，但是至少有一个标题
 */
export interface AgendaEvent {
    id: string
    title: string
    startTime: string | null
    endTime: string | null
    location: string | null
    comment: string | null
}