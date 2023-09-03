import { EnvelopeIcon } from '@heroicons/react/20/solid'
import {FiSearch} from 'react-icons/fi'

export default function SearchInputField() {
  return (
    <div>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <FiSearch className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input
          type="text"
          name="Search"
          id="Search"
          className="block w-full rounded-md border-2 border-zinc-300 py-1.5  pl-10 text-gray-900  placeholder:text-gray-400 focus:ring-1 sm:text-sm sm:leading-6"
          placeholder="Search by name, email..."
        />
      </div>
    </div>
  )
}
