const hasWarned: Record<string, boolean> = {}

export function warnOnce(msg: string) {
  const isNodeProd =
    typeof process !== 'undefined' && process.env.NODE_ENV === 'production'
  console.warn('WARNONCE - STAN REMOVE LATER! Inside the warnOnce handler isNodeProd', isNodeProd);
  console.warn('__WARN__', __WARN__);
  if (!isNodeProd && !__TEST__ && !hasWarned[msg]) {
    hasWarned[msg] = true
    warn(msg)
  }
}

export function warn(msg: string) {
  console.warn('WARN - STAN REMOVE LATER! Inside the warn handler');
  console.warn('__WARN__', __WARN__);
  console.warn(
    `\x1b[1m\x1b[33m[@vue/compiler-sfc]\x1b[0m\x1b[33m ${msg}\x1b[0m\n`
  )
}
