export type ButtonType = 'primary' | 'success' | 'danger' | 'warning'
export type ButtonSize = 'large' | 'small' | 'mini'

export interface Button {
  type: ButtonType
  size: ButtonSize
  disabled: boolean
}