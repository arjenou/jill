import { t } from "../i18n"

const translatedProps = new Set(["alt", "aria-label", "description", "label", "placeholder", "title"])

function translateChild(child: unknown): unknown {
  if (typeof child === "string") return t(child)
  if (Array.isArray(child)) return child.map(translateChild)
  return child
}

export function localizeProps(props: unknown): unknown {
  if (!props || typeof props !== "object") return props
  const sourceProps = props as Record<string, unknown>
  let localized: Record<string, unknown> | undefined

  for (const [key, value] of Object.entries(sourceProps)) {
    const next = key === "children" ? translateChild(value) : translatedProps.has(key) && typeof value === "string" ? t(value) : value
    if (next !== value) {
      localized ??= { ...sourceProps }
      localized[key] = next
    }
  }

  return localized ?? props
}
