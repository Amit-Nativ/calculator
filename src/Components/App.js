import React, {useState} from 'react';
import {Grid, Card, Container, makeStyles, Paper, CardHeader, CardContent} from '@material-ui/core';
import Display from "./Display";
import InputLayout from './InputLayout'
import _ from 'lodash'

const useStyles = makeStyles({
    card: {
        maxWidth: 350,
        padding: '5px'
    },
    mainGrid: {
        backgroundColor: "aqua",
        height: '100vh'
    }
});

export default () => {
    const [expression, setExpression] = useState([1, '+', 22]);
    const classes = useStyles();

    const actions = {
        1: () => addNumber(1),
        2: () => addNumber(2),
        3: () => addNumber(3),
        4: () => addNumber(4),
        5: () => addNumber(5),
        6: () => addNumber(6),
        7: () => addNumber(7),
        8: () => addNumber(8),
        9: () => addNumber(9),
        0: () => addNumber(0),
        'CE': () => clearLast(),
        'C': () => clearAll(),
        '←': () => deleteOne(),
    };

    const clearAll = () => setExpression([0]);

    const clearLast = () => {
        let newExpression = [...expression];
        newExpression.splice(-1, 1);

        setExpression(newExpression.length ? [...newExpression] : [0]);
    };

    const deleteOne = () => {
        const newExpression = [...expression];
        let [last] = newExpression.splice(-1, 1);

        if (last < 10 || !_.isInteger(last)) {
            setExpression(newExpression.length ? [...newExpression] : [0]);
        } else {
            setExpression([...newExpression, _.toInteger(last / 10)]);
        }
    };

    const addNumber = (num) => {
        const newExpression = [...expression];
        let last = newExpression.splice(-1, 1);

        setExpression([...newExpression, last * 10 + num]);
    };

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
                        <Display expression={expression}/>
                        <hr/>
                        <InputLayout actions={actions}/>
                    </Card>
                </Grid>
                <Grid item></Grid>
            </Grid>
        </>
    );
};
