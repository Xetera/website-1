import { Link } from "gatsby"
import React, { FC, HTMLAttributes, PropsWithChildren } from "react"
import Scrollbar from "react-perfect-scrollbar"
import "react-perfect-scrollbar/dist/css/styles.css"
import { ThemeToggler } from "../ThemeToggler"
import * as SC from "./styles"

interface IMenuItemProps {
  to: string
}

const MenuItem: FC<IMenuItemProps> = ({ children, to }) => {
  return (
    <SC.MenuItem to={to} activeClassName="active">
      {children}
    </SC.MenuItem>
  )
}

export const Sidebar: FC<PropsWithChildren<
  HTMLAttributes<HTMLDivElement>
>> = props => {
  const { children, ...restProps } = props
  const isBorderVisible = children === undefined ? false : true

  return (
    <SC.SidebarWrapper {...restProps}>
      <Scrollbar>
        <SC.Title to="/">
          The
          <br />
          Programmer's
          <br />
          Hangout
        </SC.Title>
        <SC.Inner>
          {children}

          <SC.Menu borderVisibility={isBorderVisible}>
            <MenuItem to="/about">about</MenuItem>
            <MenuItem to="/rules">rules</MenuItem>
            <MenuItem to="/resources">resources</MenuItem>
            <MenuItem to="/archives">tech spotlights</MenuItem>
          </SC.Menu>

          <ThemeToggler />
        </SC.Inner>
      </Scrollbar>
    </SC.SidebarWrapper>
  )
}
