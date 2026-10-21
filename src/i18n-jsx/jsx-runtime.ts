import { jsx as reactJsx, jsxs as reactJsxs } from "react/jsx-runtime"
import { localizeProps } from "./shared"

export { Fragment } from "react/jsx-runtime"
export type { JSX } from "react/jsx-runtime"

export function jsx(type: Parameters<typeof reactJsx>[0], props: Parameters<typeof reactJsx>[1], key?: Parameters<typeof reactJsx>[2]) {
  return reactJsx(type, localizeProps(props), key)
}

export function jsxs(type: Parameters<typeof reactJsxs>[0], props: Parameters<typeof reactJsxs>[1], key?: Parameters<typeof reactJsxs>[2]) {
  return reactJsxs(type, localizeProps(props), key)
}
