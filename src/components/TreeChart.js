import React, { useEffect } from 'react';
import ReactFlow, { Controls } from 'react-flow-renderer';
import Node from './Node';
import './TreeChart.css';

const snapGrid = [16, 16];

const TreeChart = ({ elements }) => {

  useEffect(() => {


  }, []);

  const onLoad = (reactFlowInstance) => {
    reactFlowInstance.fitView();
    reactFlowInstance.zoomTo(1.3);
    console.log(reactFlowInstance.getElements());
    console.log(reactFlowInstance);
  }
  
  // const onElementClick = (event, element) => console.log('click', element);

  return (
    <ReactFlow 
      onLoad={onLoad} 
      elements={elements}
      // onElementClick={onElementClick} 
      nodesDraggable={false}
      nodesConnectable={false}
      snapToGrid={true}
      snapGrid={snapGrid}
    >
      <Controls />
    </ReactFlow>
  );

}

export default TreeChart;
