import Link from 'next/link'

export default function Home() {
  return (
    <ul className="flex flex-col p-4 space-y-4">
      <li className="hover:text-gray-500">
        <Link href="/FormikAbstraction">
          <a>Formik Abstract</a>
        </Link>
      </li>
      <li className="hover:text-gray-500">
        <Link href="/DynamicForm">
          <a>Dynamic Form</a>
        </Link>
      </li>
      <li className="hover:text-gray-500">
        <Link href="/SignUp">
          <a>Sign Up Form</a>
        </Link>
      </li>
      <li className="hover:text-gray-500">
        <Link href="/StackedForm">
          <a>Stacked Form</a>
        </Link>
      </li>
    </ul>
  )
}
