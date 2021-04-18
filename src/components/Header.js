import { makeStyles, Typography } from "@material-ui/core"

import React from 'react'


const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(3, 0, 2),
        textAlign: 'center',
        fontSize: '30px',
        color: 'deeppink',
        textShadow: ' 1px 1px darkmagenta'
    }
}))
export const Header = () => {
    const styles = useStyles()
    return (
        <Typography className={styles.root} component='h1' variant='h5'>
            Многоступенчатая форма
        </Typography>
    )
}