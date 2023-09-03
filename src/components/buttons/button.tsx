import React from 'react'

interface IButton {
    text: string;
    onClick: any
}

function Button({text, onClick} : IButton) {
  return (
    <button
    onClick={() => onClick()}
      type="button"
      className="flex justify-center rounded-md bg-primary py-2 px-5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      {text}
    </button>
  )
}

export default Button