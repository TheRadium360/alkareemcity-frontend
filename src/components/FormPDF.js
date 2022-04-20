import React from 'react'
import example from './Meerkat Features - Google Docs.pdf';

export default function FormPDF() {
  return (
    <div>
      <a  href={example} download>Click me to download</a>
    </div>
  )
}
