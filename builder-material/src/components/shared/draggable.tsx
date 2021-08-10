import React, { FunctionComponent, ReactNode } from "react";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    wrapper: {
        display: 'inline-block',
    }
}));

interface DraggableSourceProps {
    onDragStart(event: React.DragEvent<HTMLDivElement>): any;
    className?: string;
};

const DraggableSource: FunctionComponent<DraggableSourceProps> = (props) => {
    const classes = useStyle();
    
    return (
        <div className={`${classes.wrapper} ${props.className}`} draggable={true} onDragStart={props.onDragStart}>
            {props.children}
        </div>
    );
};

interface DraggableDestinationProps {
    onDrop(event: React.DragEvent<HTMLDivElement>): any;
    children: ReactNode;
    className?: string;
};

const DraggableDestination: FunctionComponent<DraggableDestinationProps> = ({onDrop, children, className}) => {
    const classes = useStyle();

    return (
        <div onDragOver={(event) => event.preventDefault()} onDrop={onDrop} className={className}>
            {children}
        </div>
    );
}

export { DraggableSource, DraggableDestination };