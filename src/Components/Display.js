import React from "react";
import {makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles({
    primary: {
        // fontSize: 25
    },
    secondary: {
        color: "grey"
    }
});

export default (props) => {
    const classes = useStyles();

    return (
        <>
            <Typography variant="subtitle2" className={classes.secondary}>{props.expression}</Typography>
            <Typography variant="h3" className={classes.primary}>{props.expression}</Typography>
        </>
    );
}