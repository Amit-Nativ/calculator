import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button"

export default (props) => {

    const performAction = key => e => {
        const {actions} = props;
        actions[key]();
    };

    const Row = () => {
        return (
            <Grid container
                  justify={"space-between"}>
                <Button onClick={performAction('←')}>1</Button>
                <Button>1</Button>
                <Button>1</Button>
                <Button>1</Button>
            </Grid>
        );
    }

    return (
        <Grid container>
            <Row></Row>
            <Row></Row>
            <Row></Row>
            <Row></Row>
        </Grid>
    );
}