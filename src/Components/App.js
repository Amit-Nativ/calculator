import React, {useState} from 'react';
import {Grid, Card, Container, makeStyles, Paper, CardHeader, CardContent} from '@material-ui/core';
import Display from "./Display";
import InputLayout from './InputLayout'

const useStyles = makeStyles({
    card: {
        minWidth: 400
    },
    mainGrid: {
        backgroundColor: "aqua",
        height: '100vh'
    }
});

export default () => {
    const [expression, setExpression] = useState([1, '+', 2]);
    const classes = useStyles();

    return (
        <>
            <Grid
                container
                justify='space-around'
                alignItems="center"
                className={classes.mainGrid}
            >
                <Grid item></Grid>
                <Grid item>
                    <Card className={classes.card}>
                        <CardHeader component={Display} expression={expression}/>
                        <hr/>
                        <CardContent component={InputLayout}/>
                    </Card>
                </Grid>
                <Grid item></Grid>
            </Grid>
        </>
    );
};
