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
 * @interface MenuListProps
 * @description 菜单按钮列表的 props 类型定义
 * @property {boolen} visible - 菜单是否显示
 * @callback onVisibleChange - 菜单显示状态变化的回调函数
 */
export interface MenuListProps {
    visible: boolean
    onVisibleChange: (visible: boolean) => void
}