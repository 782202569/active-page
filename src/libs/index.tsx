// 回调函数的类型
type ReFn = (...args: any) => void
// 节流函数的类型
type ThFn = (fn: ReFn, timer: number) => ReFn
const throttle: ThFn = (fn, timer) => {
  let time: any = null
  const _throttle = (...args: any) => {
    if (time) clearTimeout(time)
    time = setTimeout(() => {
      fn.apply(this, args)
    }, timer);
  }
  return _throttle
}
export default throttle