import React, { Component } from 'react'
import { jsx, css, Global } from "@emotion/core";

const color = 'white'

export const emComp = () => {
    return (
        <div
        className={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: ${color};
          }
        `}
      >
        Hover to change color.
      </div>
    )
}


export default emComp
