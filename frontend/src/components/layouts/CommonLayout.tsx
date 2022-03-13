import React from "react"

import { Container, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import Header from "components/layouts/Header"

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: "3rem"
  }
}))

interface CommonLayoutProps {
  children: React.ReactElement
}

// 全てのページで共通となるレイアウト
const CommonLayout = ({ children }: CommonLayoutProps) => {
  const classes = useStyles()

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Container maxWidth="lg">
          <Grid container className={classes.container}>
            <Grid item>
              {children}
            </Grid>   
          </Grid>
        </Container>
      </main>
    </>
  )
}

export default CommonLayout
