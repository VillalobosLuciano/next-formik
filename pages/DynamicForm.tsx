import { Formik, Form } from 'formik'
import { TextInput, Select } from '../components/formElements'
import formJson from '../data/custom-form.json'
import * as yup from 'yup'

const initialValues: { [key: string]: any } = {}
const validatedFields: { [key: string]: any } = {}
let schema = yup.string()

for (const input of formJson) {
  initialValues[input.name] = input.value

  if (!input.validations) continue

  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required('This field is required')
    }

    if (rule.type === 'minLength') {
      schema = schema.min(
        (rule as any).value || 2,
        `Must be at least ${(rule as any).value} characters`
      )
    }

    if (rule.type === 'maxLength') {
      schema = schema.max(
        (rule as any).value || 15,
        `Must be less than ${(rule as any).value} characters`
      )
    }

    if (rule.type === 'email') {
      schema = schema.email('Invalid email address')
    }

    // other validation types
  }
  validatedFields[input.name] = schema
}

const validationSchema = yup.object().shape(validatedFields)

export const DynamicForm = () => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        {({ isSubmitting }) => (
          <Form noValidate>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (type === 'input' || type === 'password' || type === 'email') {
                return (
                  <TextInput
                    key={name}
                    type={type as any}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                  />
                )
              } else if (type === 'select') {
                return (
                  <Select key={name} label={label} name={name}>
                    <option value="">Select an option</option>
                    {options?.map(({ id, label }) => (
                      <option key={id} value={id}>
                        {label}
                      </option>
                    ))}
                  </Select>
                )
              }

              throw new Error(`Unknown type: ${type}`)
            })}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default DynamicForm
