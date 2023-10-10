import * as React from 'react'
import { type SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4 9a5 5 0 1 1 10 0A5 5 0 0 1 4 9zm5-7a7 7 0 1 0 4.2 12.6.999.999 0 0 0 .093.107l3 3a1 1 0 0 0 1.414-1.414l-3-3a.999.999 0 0 0-.107-.093A7 7 0 0 0 9 2z"
    />
  </svg>
)
export default SvgComponent
