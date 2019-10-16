import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button"

export default (props) => {

    const performAction = key => e => {
        const {actions} = props;
        actions[key]();
    };

    const Row = ({values}) => {
        return (
            <Grid container
                  justify={"space-between"}>
                <Button onClick={performAction(values[0])}>{values[0]}</Button>
                <Button onClick={performAction(values[1])}>{values[1]}</Button>
                <Button  onClick={performAction(values[2])}>{values[2]}</Button>
                <Button onClick={performAction(values[3])}>{values[3]}</Button>
            </Grid>
        );
    }

    return (
        <Grid container>
            <Row values={['CE', 'C', '←', '/']}/>
            <Row values={[7, 8, 9, 'x']}/>
            <Row values={[4, 5, 6, '-']}/>
            <Row values={[1, 2, 3, '+']}/>
            <Row values={['+/-', 0, '.', '=']}/>
        </Grid>
    );
}