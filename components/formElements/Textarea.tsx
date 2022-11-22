import { ErrorMessage, useField } from 'formik'
import clsx from 'clsx'

interface Props {
  name: string
  label: string
  type?: string
  placeholder?: string
  rows?: number
  [x: string]: any
}

export const Textarea = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props)

  return (
    <>
      <label
        className="mb-1 block text-sm font-medium text-gray-700"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <textarea
        {...field}
        {...props}
        id={props.id || props.name}
        className={clsx(
          {
            'border-red-500': meta.touched && meta.error,
            'border-gray-300': !meta.touched || !meta.error,
          },
          'mt-1 block w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:border-indigo-500 focus:ring-indigo-500',
          props.className
        )}
      />
      <ErrorMessage
        name={props.name}
        component="div"
        className="mt-2 text-xs text-red-500"
      />
    </>
  )
}
