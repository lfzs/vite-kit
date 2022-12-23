import { dayjs } from '@/utils/common'

// 时间格式化
function formatTime(time, unit = 'YYYY-MM-DD HH:mm:ss') {
  const T = dayjs(time)
  return T.isValid() ? T.format(unit) : time
}

export {
  formatTime,
}
