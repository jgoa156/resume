export type INodeType = "main" | "primary" | "secondary"

export interface INodeProps {
  key?: any
  t?: any
  type?: INodeType
  title?: string
  years?: number
  proficiency?: number
  details?: string | JSX.Element
  icon?: string
  imgSrc?: string
  iconNode?: JSX.Element
  childNodes?: INodeProps[]
}
