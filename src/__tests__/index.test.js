import {render, fireEvent} from 'react-testing-library'
import React from 'react'
import 'jest-dom/extend-expect'
import MyComponent from '../'

it('fireEvent on document.body should not error', () => {
  fireEvent.keyDown(document.body, {
    key: "Escape",
    keyCode: 27,
    which: 27
  })
})

