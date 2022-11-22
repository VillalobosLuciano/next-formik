import { ErrorMessage, useField } from 'formik'
import clsx from 'clsx'

interface Props {
  name: string
  label: string
  description?: string
  [x: string]: any
}

export const Checkbox = ({ label, ...props }: Props) => {
  const [field] = useField({ ...props, type: 'checkbox' })

  return (
    <>
      <div className="relative flex items-start">
        <div className="flex items-center h-5">
          <input
            {...field}
            {...props}
            id={props.id || props.name}
            type="checkbox"
            className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          />
        </div>
        <div className="ml-3 text-sm">
          <label
            htmlFor={props.id || props.name}
            className="font-medium text-gray-700"
          >
            {label}
          </label>
          <p className="text-gray-500">{props.description}</p>
          <ErrorMessage
            name={props.name}
            component="div"
            className="mt-2 text-xs text-red-500"
          />
        </div>
      </div>
    </>
  )
}
