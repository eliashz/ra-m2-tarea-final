import React from 'react'

// Seria necesario renderizar más de un icono para generalizar.
// Te recomiendo que uses un icono de una tipografía, cargando la tipo y usando el componente para renderiza el que quieras en cada momento según las props.
// https://fonts.google.com/icons
// Falta validación por propTypes
function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      fill="white"
      height="22"
      viewBox="0 0 24 24"
    >
      <path d="M9.145 18.29c-5.042 0-9.145-4.102-9.145-9.145s4.103-9.145 9.145-9.145 9.145 4.103 9.145 9.145-4.102 9.145-9.145 9.145zm0-15.167c-3.321 0-6.022 2.702-6.022 6.022s2.702 6.022 6.022 6.022 6.023-2.702 6.023-6.022-2.702-6.022-6.023-6.022zm9.263 12.443c-.817 1.176-1.852 2.188-3.046 2.981l5.452 5.453 3.014-3.013-5.42-5.421z" />
    </svg>
  )
}

export default Icon
