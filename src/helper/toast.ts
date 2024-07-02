import { toast, ToasterProps } from 'sonner'

export const renderToast = (
  promise?: Promise<any>,
  type?: 'loading' | 'success' | 'error' | 'info',
  message?: string
) => {
  const toastConfig: ToasterProps = {
    position: 'top-center',
    duration: 3000,
    richColors: true,
  }

  const { duration, ...rest } = toastConfig

  if (promise) {
    return toast.promise(promise!, {
      loading: 'Loading...',
      success: 'Success',
      error: 'Error',
      ...rest,
    })
  }

  return toast[type!](message!, toastConfig)
}
