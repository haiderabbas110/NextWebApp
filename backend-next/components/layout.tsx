import Header from '../components/partials/Header/Header'
import Sidebar from '../components/partials/Sidebar/Sidebar'
import React, { ReactNode, useState } from "react";

interface Props {
    children?: ReactNode
    // any props that come into the component
}
export default function Layout({ children, ...props }: Props ) {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Header setOpen={setOpen} />
      <Sidebar open={open}  />

      <main>{children}</main>
    </>
  )
}