export type ToastTypes = {
  isShow: boolean
  text: string
  color: string
}

export type ToastPropsTypes = {
  props: {
    showToast: ToastTypes
    setShowToast: React.Dispatch<React.SetStateAction<ToastTypes>>
  }
}
