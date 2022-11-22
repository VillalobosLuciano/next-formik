import { Formik, Form } from 'formik'
import * as yup from 'yup'
import { TextInput, Select, Checkbox } from '../components/formElements'

export const FormikAbstraction = () => {
  return (
    <>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
        validationSchema={yup.object().shape({
          firstName: yup.string().required('Required'),
          lastName: yup.string().required('Required'),
          email: yup.string().email('Invalid email').required('Required'),
          terms: yup.boolean().oneOf([true], 'Required'),
          jobType: yup.string().notOneOf(['designer']).required('Required'),
        })}
      >
        {({ isSubmitting, resetForm }) => (
          <div className="max-w-4xl py-16 mx-auto">
            <Form noValidate>
              <div className="grid grid-cols-1 mt-6 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <TextInput
                    name="firstName"
                    type="text"
                    label="First Name"
                    placeholder="Luciano"
                  />
                </div>
                <div className="sm:col-span-3">
                  <TextInput
                    name="lastName"
                    type="text"
                    label="Last Name"
                    placeholder="Villalobos"
                  />
                </div>
                <div className="sm:col-span-3">
                  <TextInput
                    name="email"
                    label="Email"
                    placeholder="you@email.com"
                    type="email"
                  />
                </div>

                <div className="sm:col-span-3">
                  <Select name="jobType" label="Job Type">
                    <option value="">Select</option>
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                  </Select>
                </div>

                <div className="sm:col-span-3">
                  <Checkbox
                    name="terms"
                    label="Accept Terms"
                    description='By clicking "Submit" you agree to our terms and conditions.'
                  />
                </div>
              </div>
              <div className="pt-5">
                <div className="flex justify-end">
                  <button
                    onClick={() => resetForm()}
                    type="button"
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Reset
                  </button>
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </>
  )
}

export default FormikAbstraction
