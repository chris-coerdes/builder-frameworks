import { FunctionComponent, useState } from "react";
import { Grid, Paper, Box, Button, FormControl, InputLabel, Input, Accordion } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import Modal from "react-modal";
import { DraggableDestination, DraggableSource } from "./../shared/draggable";

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      height: '100%',
    },
    flex: {
        display: 'flex',
    },
    paper: {
      textAlign: 'center',
      flexDirection: 'column',
      display: 'flex',
      height: '100%',
    },
    box: {
      padding: theme.spacing(2),
      display: 'flex',
    },
    header: {
      backgroundColor: '#f3f4f7',
      color: theme.palette.text.hint,
      fontWeight: 800,
      borderBottom: 'solid 1px #d6d6d6',
      borderTop: 'solid 1px #d6d6d6',
    },
    fullHeight: {
        height: '100%',
    },
    fullWidth: {
        width: '100%',
    },
    layoutSelectButton: {
        padding: theme.spacing(0.3),
    },
    layoutSelectRow: {
        backgroundColor: theme.palette.info.main,
        color: theme.palette.text.secondary,
        fontWeight: 800,
        borderRadius: '3px',
        padding: theme.spacing(0.5),
        '&:not(:last-child)': {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderRight: 'solid 1px',
        },
        '&:not(:first-child)': {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            borderLeft: 'solid 1px',
        }
    },
    draggableDestination: {
        backgroundColor: 'white',
        border: 'dashed 1px grey',
        borderRadius: '3px',
    },
    accordion: {
        padding: '10px',
        textAlign: 'left',
        paddingLeft: '15px',
        backgroundColor: '#f3f4f7',
        border: 'solid 1px #d6d6d6',
        borderRadius: '2px',
        display: 'flex',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    pageContent: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f8fafc',
    }
}));

const customStyles = {
    content: {
      marginTop: '20px',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '600px',
    },
  };

const Builder: FunctionComponent = () => {
    const classes = useStyles();

    const [isWidgetSettingsModalOpen, setIsWidgetSettingsModalOpen] = useState(false);

    const openWidgetSettingsModal = function(): any {
        setIsWidgetSettingsModalOpen(true);
    }

    return (
        <div className={classes.root}>
            <Grid className={classes.fullHeight} container spacing={0}>
                <Grid className={classes.fullHeight} item md={3} lg={2}>
                    <Paper className={classes.paper}>
                        <Box className={`${classes.box} ${classes.header}`}>Layout</Box>
                        <Box className={classes.box}>
                            <Box width={1}>
                                <Button className={classes.layoutSelectButton} fullWidth>
                                    <DraggableSource
                                        className={classes.fullWidth}
                                        onDragStart={(event) => event.dataTransfer.setData("text", event.currentTarget.id)}
                                    >
                                        <Grid container>
                                            <Grid item xs={12} className={classes.layoutSelectRow}>12</Grid>
                                        </Grid>
                                    </DraggableSource>
                                </Button>

                                <Button className={classes.layoutSelectButton} fullWidth>
                                    <DraggableSource
                                        className={`${classes.fullWidth} ${classes.flex}`}
                                        onDragStart={(event) => event.dataTransfer.setData("text", event.currentTarget.id)}
                                    >
                                        <Grid container>
                                            <Grid item xs={6} className={classes.layoutSelectRow}>6</Grid>
                                            <Grid item xs={6} className={classes.layoutSelectRow}>6</Grid>
                                        </Grid>
                                    </DraggableSource>
                                </Button>

                                <Button className={classes.layoutSelectButton} fullWidth>
                                    <DraggableSource
                                        className={`${classes.fullWidth} ${classes.flex}`}
                                        onDragStart={(event) => event.dataTransfer.setData("text", event.currentTarget.id)}
                                    >
                                        <Grid container>
                                            <Grid item xs={4} className={classes.layoutSelectRow}>4</Grid>
                                            <Grid item xs={8} className={classes.layoutSelectRow}>8</Grid>
                                        </Grid>
                                    </DraggableSource>
                                </Button>

                                <Button className={classes.layoutSelectButton} fullWidth>
                                    <DraggableSource
                                        className={`${classes.fullWidth} ${classes.flex}`}
                                        onDragStart={(event) => event.dataTransfer.setData("text", event.currentTarget.id)}
                                    >
                                        <Grid container>
                                            <Grid item xs={8} className={classes.layoutSelectRow}>8</Grid>
                                            <Grid item xs={4} className={classes.layoutSelectRow}>4</Grid>
                                        </Grid>
                                    </DraggableSource>
                                </Button>

                                <Button className={classes.layoutSelectButton} fullWidth>
                                    <DraggableSource
                                        className={`${classes.fullWidth} ${classes.flex}`}
                                        onDragStart={(event) => event.dataTransfer.setData("text", event.currentTarget.id)}
                                    >
                                        <Grid container>
                                            <Grid item xs={4} className={classes.layoutSelectRow}>4</Grid>
                                            <Grid item xs={4} className={classes.layoutSelectRow}>4</Grid>
                                            <Grid item xs={4} className={classes.layoutSelectRow}>4</Grid>
                                        </Grid>
                                    </DraggableSource>
                                </Button>

                                <Button className={classes.layoutSelectButton} fullWidth>
                                    <DraggableSource
                                        className={`${classes.fullWidth} ${classes.flex}`}
                                        onDragStart={(event) => event.dataTransfer.setData("text", event.currentTarget.id)}
                                    >
                                        <Grid container>
                                            <Grid item xs={3} className={classes.layoutSelectRow}>3</Grid>
                                            <Grid item xs={6} className={classes.layoutSelectRow}>6</Grid>
                                            <Grid item xs={3} className={classes.layoutSelectRow}>3</Grid>
                                        </Grid>
                                    </DraggableSource>
                                </Button>

                                <Button className={classes.layoutSelectButton} fullWidth>
                                    <DraggableSource
                                        className={`${classes.fullWidth} ${classes.flex}`}
                                        onDragStart={(event) => event.dataTransfer.setData("text", event.currentTarget.id)}
                                    >
                                        <Grid container>
                                            <Grid item xs={3} className={classes.layoutSelectRow}>3</Grid>
                                            <Grid item xs={3} className={classes.layoutSelectRow}>3</Grid>
                                            <Grid item xs={3} className={classes.layoutSelectRow}>3</Grid>
                                            <Grid item xs={3} className={classes.layoutSelectRow}>3</Grid>
                                        </Grid>
                                    </DraggableSource>
                                </Button>
                            </Box>
                        </Box>
                        <Box className={`${classes.box} ${classes.header}`}>Widgets</Box>
                        <Box flexGrow={1} className={classes.box}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <span className={classes.accordion}>Widget 1</span>
                                </Grid>
                            </Grid>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item md={9} lg={10}>
                    <Paper className={classes.paper}>
                        <Box className={`${classes.box} ${classes.header}`}>Page content header</Box>
                        <Box flexGrow={1} className={classes.box}>
                            <DraggableDestination
                                className={classes.pageContent}
                                onDrop={openWidgetSettingsModal}
                            >
                                <Box flexGrow={1} className={`${classes.draggableDestination} ${classes.fullHeight}`}>Drag here</Box>
                            </DraggableDestination>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>

            <Modal
                isOpen={isWidgetSettingsModalOpen}
                shouldCloseOnOverlayClick={true}
                ariaHideApp={false}
                onRequestClose={() => setIsWidgetSettingsModalOpen(!isWidgetSettingsModalOpen)}
                style={customStyles}
            >
                <Box color="hint">
                    <h4>WIDGET SETTINGS</h4>
                </Box>
                <Box>
                    <FormControl>
                        <InputLabel style={{color: '#b6b6b6'}} htmlFor="my-input">Email address</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />
                    </FormControl>
                </Box>
            </Modal>
        </div>
    );
}

export default Builder;