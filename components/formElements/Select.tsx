import { ErrorMessage, useField } from 'formik'
import clsx from 'clsx'

interface Props {
  name: string
  label: string
  placeholder?: string
  [x: string]: any
}

export const Select = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props)

  return (
    <>
      <label
        className="block mb-1 text-sm font-medium text-gray-700"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <select
        {...field}
        {...props}
        id={props.id || props.name}
        className={clsx(
          {
            'border-red-500': meta.touched && meta.error,
            'border-gray-300': !meta.touched || !meta.error,
          },
          'block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm',
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
