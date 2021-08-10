import { FunctionComponent, useState } from "react";
import { Col, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";
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
        <>
            <Row className="m-0 h-100">
                <Col md={3} lg={2} className="p-0 border-end" style={{border: "none 1px #d6d6d6"}}>
                    <Row className="m-0 p-0">
                        <Col xs={12} className="text-start p-1 ps-3 " style={{color: "#ffab00", backgroundColor: "#f3f3f3"}}>
                            <h6>Layout</h6>
                        </Col>

                        <Col xs={12} className="p-3">
                            <DraggableSource className="col-xs-12 layout-select-row w-100" onDragStart={(event) => event.dataTransfer.setData("text", event.currentTarget.id)}>
                                <Col className="layout-select-col" xs={12}>12</Col>
                            </DraggableSource>

                            <DraggableSource className="col-xs-12 layout-select-row w-100" onDragStart={(event) => event.dataTransfer.setData("text", event.currentTarget.id)}>
                                <Col className="layout-select-col" xs={6}>6</Col>
                                <Col className="layout-select-col" xs={6}>6</Col>
                            </DraggableSource>

                            <DraggableSource className="col-xs-12 layout-select-row w-100" onDragStart={(event) => event.dataTransfer.setData("text", event.currentTarget.id)}>
                                <Col className="layout-select-col" xs={4}>4</Col>
                                <Col className="layout-select-col" xs={8}>8</Col>
                            </DraggableSource>

                            <DraggableSource className="col-xs-12 layout-select-row w-100" onDragStart={(event) => event.dataTransfer.setData("text", event.currentTarget.id)}>
                                <Col className="layout-select-col" xs={8}>8</Col>
                                <Col className="layout-select-col" xs={4}>4</Col>
                            </DraggableSource>

                            <DraggableSource className="col-xs-12 layout-select-row w-100" onDragStart={(event) => event.dataTransfer.setData("text", event.currentTarget.id)}>
                                <Col className="layout-select-col" xs={4}>4</Col>
                                <Col className="layout-select-col" xs={4}>4</Col>
                                <Col className="layout-select-col" xs={4}>4</Col>
                            </DraggableSource>

                            <DraggableSource className="col-xs-12 layout-select-row w-100" onDragStart={(event) => event.dataTransfer.setData("text", event.currentTarget.id)}>
                                <Col className="layout-select-col" xs={3}>3</Col>
                                <Col className="layout-select-col" xs={6}>6</Col>
                                <Col className="layout-select-col" xs={3}>3</Col>
                            </DraggableSource>

                            <DraggableSource className="col-xs-12 layout-select-row w-100" onDragStart={(event) => event.dataTransfer.setData("text", event.currentTarget.id)}>
                                <Col className="layout-select-col" xs={3}>3</Col>
                                <Col className="layout-select-col" xs={3}>3</Col>
                                <Col className="layout-select-col" xs={3}>3</Col>
                                <Col className="layout-select-col" xs={3}>3</Col>
                            </DraggableSource>
                        </Col>

                        <Col xs={12} className="text-start p-1 ps-3 " style={{color: "#ffab00", backgroundColor: "#f3f3f3"}}>
                            <h6>Widgets</h6>
                        </Col>

                        <Col xs={12} className="p-3 pt-4">
                            <Col className="p-2 ps-3 m-0 mb-1 text-start cursor-pointer" style={{backgroundColor: "#f3f3f3", border: "solid 1px #d6d6d6", borderRadius: "2px"}}>Widget 1</Col>
                            <Col className="p-2 ps-3 m-0 mb-1 text-start cursor-pointer" style={{backgroundColor: "#f3f3f3", border: "solid 1px #d6d6d6", borderRadius: "2px"}}>Widget 2</Col>
                            <Col className="p-2 ps-3 m-0 mb-1 text-start cursor-pointer" style={{backgroundColor: "#f3f3f3", border: "solid 1px #d6d6d6", borderRadius: "2px"}}>Widget 3</Col>
                        </Col>
                    </Row>
                </Col>
                <Col md={9} lg={10} className="p-0">
                    <Row className="m-0 p-0 h-100">
                        <Col xs={12} className="text-start p-1 ps-3 m-0" style={{color: "#ffab00", backgroundColor: "#f3f3f3"}}>
                            <h6>Page content header</h6>
                        </Col>

                        <DraggableDestination
                            className="col-xs-12 h-100 p-0"
                            onDrop={() => setIsWidgetSettingsModalOpen(true)}
                        >
                            <Col xs={12} className="h-100 p-2" style={{backgroundColor: "#f8fafc"}}>
                                <div className="h-100" style={{backgroundColor: 'white', border: 'dashed 1px #d6d6d6', borderRadius: '2px'}}>
                                    Drag here
                                </div>
                            </Col>
                        </DraggableDestination>
                    </Row>
                </Col>
            </Row>

            <Modal
                isOpen={isWidgetSettingsModalOpen}
                shouldCloseOnOverlayClick={true}
                ariaHideApp={false}
                onRequestClose={() => setIsWidgetSettingsModalOpen(!isWidgetSettingsModalOpen)}
                style={customStyles}
            >
                <div style={{}}>
                    <h4 style={{color: '#ff9b00'}}>WIDGET SETTINGS</h4>
                </div>
                <Row>
                    <Col xs={12}>
                        <FormGroup>
                            <FormLabel>Email</FormLabel>
                            <FormControl type="email" placeholder="Email"/>
                        </FormGroup>
                    </Col>
                </Row>
            </Modal>
        </>
    );
};

export default Builder;