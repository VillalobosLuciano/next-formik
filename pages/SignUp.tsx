import { Formik, Form } from 'formik'
import * as yup from 'yup'
import { TextInput, Checkbox } from '../components/formElements'

export const SignUpForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
          acceptTerms: false,
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
        validationSchema={yup.object().shape({
          firstName: yup
            .string()
            .min(2, 'Name must be at least 2 characters long')
            .max(15, 'Name must be 15 characters or less')
            .required('Name is required'),
          lastName: yup
            .string()
            .min(2, 'Name must be at least 2 characters long')
            .max(15, 'Name must be 15 characters or less')
            .required('Last name is required'),
          email: yup
            .string()
            .email('Invalid email address')
            .required('Email is required'),
          password: yup
            .string()
            .min(8, 'Password must be at least 8 characters long')
            .required('Password is required'),
          confirmPassword: yup
            .string()
            .oneOf([yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
          acceptTerms: yup
            .boolean()
            .oneOf([true], 'You must accept the terms and conditions')
            .required('You must accept the terms and conditions'),
        })}
      >
        {({ isSubmitting, handleReset }) => (
          <div className="max-w-4xl py-16 mx-auto">
            <Form>
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
                  <TextInput
                    name="password"
                    label="Password"
                    placeholder="********"
                    type="password"
                  />
                </div>
                <div className="sm:col-span-3">
                  <TextInput
                    name="confirmPassword"
                    label="Confirm Password"
                    placeholder="********"
                    type="password"
                  />
                </div>
                <div className="sm:col-span-3">
                  <Checkbox
                    name="acceptTerms"
                    label="Accept Terms"
                    description='By clicking "Submit" you agree to our terms and conditions.'
                  />
                </div>
              </div>
              <div className="pt-5">
                <div className="flex justify-end">
                  <button
                    onClick={handleReset}
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

export default SignUpForm
