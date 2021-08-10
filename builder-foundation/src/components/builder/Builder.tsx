import { FunctionComponent, useState } from "react";
import { Grid, Cell, Label } from "react-foundation";
import { DraggableSource, DraggableDestination } from "../shared/draggable";
import Modal from "react-modal";

const customStyles = {
    content: {
      marginTop: '50px',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '600px',
    },
  };

const Builder: FunctionComponent = () => {
    const [isWidgetSettingsModalOpen, setIsWidgetSettingsModalOpen] = useState(false);

    return (
        <Grid className="display">
            <Cell medium={3} large={2} style={{borderRight: 'solid 1px #d6d6d6', height: '100%'}}>
                <div style={{display: 'flex', padding: '7px', backgroundColor: '#e6e6e6'}}>
                    <strong style={{color: '#ff9b00'}}>Layout</strong>
                </div>
                <Grid style={{padding: '5%'}}>
                    <Cell className="layout-select-row" small={12}>
                        <DraggableSource
                            onDragStart={(event) => event.dataTransfer.setData('text', event.currentTarget.id)}
                        >
                            <Grid>
                                <Cell className="layout-select-col" small={12}>12</Cell>
                            </Grid>
                        </DraggableSource>
                    </Cell>

                    <Cell className="layout-select-row" small={12}>
                        <DraggableSource
                            onDragStart={(event) => event.dataTransfer.setData('text', event.currentTarget.id)}
                        >
                            <Grid>
                                <Cell className="layout-select-col" small={6}>6</Cell>
                                <Cell className="layout-select-col" small={6}>6</Cell>
                            </Grid>
                        </DraggableSource>
                    </Cell>

                    <Cell className="layout-select-row" small={12}>
                        <DraggableSource
                            onDragStart={(event) => event.dataTransfer.setData('text', event.currentTarget.id)}
                        >
                            <Grid>
                                <Cell className="layout-select-col" small={4}>4</Cell>
                                <Cell className="layout-select-col" small={8}>8</Cell>
                            </Grid>
                        </DraggableSource>
                    </Cell>

                    <Cell className="layout-select-row" small={12}>
                        <DraggableSource
                            onDragStart={(event) => event.dataTransfer.setData('text', event.currentTarget.id)}
                        >
                            <Grid>
                                <Cell className="layout-select-col" small={8}>8</Cell>
                                <Cell className="layout-select-col" small={4}>4</Cell>
                            </Grid>
                        </DraggableSource>
                    </Cell>

                    <Cell className="layout-select-row" small={12}>
                        <DraggableSource
                            onDragStart={(event) => event.dataTransfer.setData('text', event.currentTarget.id)}
                        >
                            <Grid>
                                <Cell className="layout-select-col" small={4}>4</Cell>
                                <Cell className="layout-select-col" small={4}>4</Cell>
                                <Cell className="layout-select-col" small={4}>4</Cell>
                            </Grid>
                        </DraggableSource>
                    </Cell>

                    <Cell className="layout-select-row" small={12}>
                        <DraggableSource
                            onDragStart={(event) => event.dataTransfer.setData('text', event.currentTarget.id)}
                        >
                            <Grid>
                                <Cell className="layout-select-col" small={3}>3</Cell>
                                <Cell className="layout-select-col" small={6}>6</Cell>
                                <Cell className="layout-select-col" small={3}>3</Cell>
                            </Grid>
                        </DraggableSource>
                    </Cell>

                    <Cell className="layout-select-row" small={12}>
                        <DraggableSource
                            onDragStart={(event) => event.dataTransfer.setData('text', event.currentTarget.id)}
                        >
                            <Grid>
                                <Cell className="layout-select-col" small={3}>3</Cell>
                                <Cell className="layout-select-col" small={3}>3</Cell>
                                <Cell className="layout-select-col" small={3}>3</Cell>
                                <Cell className="layout-select-col" small={3}>3</Cell>
                            </Grid>
                        </DraggableSource>
                    </Cell>
                </Grid>
                <div style={{display: 'flex', padding: '7px', backgroundColor: '#e6e6e6'}}>
                    <strong style={{color: '#ff9b00'}}>Widgets</strong>
                </div>
                <Grid style={{padding: '10px'}}>
                    <Cell className="layout-widget-accordion" small={12}>Category 1</Cell>
                    <Cell className="layout-widget-accordion" small={12}>Category 2</Cell>
                    <Cell className="layout-widget-accordion" small={12}>Category 3</Cell>
                </Grid>
            </Cell>
            <Cell medium={9} large={10}>
                <div style={{display: 'flex', padding: '7px', backgroundColor: '#e6e6e6'}}>
                    <strong style={{color: '#ff9b00'}}>Page content header</strong>
                </div>
                <Grid style={{padding: '20px'}}>
                    <Cell small={12} style={{minHeight: '50px', border: 'solid 1px #d6d6d6', backgroundColor: '#e6e6e6', padding: '5px'}}>
                        <DraggableDestination
                            onDrop={() => setIsWidgetSettingsModalOpen(true)}
                        >
                            <div style={{display: 'flex', backgroundColor: 'white', height: '100%', justifyContent: 'center', border: 'dashed 1px lightgrey'}}>Drag here</div>
                        </DraggableDestination>
                    </Cell>
                </Grid>
            </Cell>

            <Modal
                isOpen={isWidgetSettingsModalOpen}
                shouldCloseOnOverlayClick={true}
                ariaHideApp={false}
                onRequestClose={() => setIsWidgetSettingsModalOpen(!isWidgetSettingsModalOpen)}
                style={customStyles}
            >
                <div style={{}}>
                    <h4 style={{color: '#ff9b00'}}>Page content header</h4>
                </div>
                <Grid>
                    <Cell small={12}>
                        <label>Input Label
                            <input type="text" placeholder=".medium-6.cell"/>
                        </label>
                    </Cell>
                </Grid>
            </Modal>
        </Grid>
    );
};

export default Builder;