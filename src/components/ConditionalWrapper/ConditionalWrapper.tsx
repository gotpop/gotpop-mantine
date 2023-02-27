import { ReactElement } from "react"

type Props = {
  condition?: boolean
  wrapper: (children: ReactElement) => ReactElement
  children: ReactElement
}

export const ConditionalWrapper = ({ condition = false, wrapper, children }: Props) =>
  condition ? wrapper(children) : children
