/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/core'

const style = css`
  color: hotpink;
`

const SomeComponent = ({ children }) => (
    <div css={style}>
        Some hotpink text.
        {children}
    </div>
)

const anotherStyle = css({
    textDecoration: 'underline'
})

const AnotherComponent = () => (
    <div css={anotherStyle}>Some text with an underline.</div>
)

const emComp = () => {
    return (
        <SomeComponent>
            <AnotherComponent />
        </SomeComponent>
    )
}

export default emComp
