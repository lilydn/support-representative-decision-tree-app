import React from 'react';
import ReactFlow, { Controls } from 'react-flow-renderer';
import './DecisionTree.css';
import Node from './Node';


const DecisionTree = () => {

  const onLoad = (reactFlowInstance) => {
    reactFlowInstance.fitView();
    reactFlowInstance.zoomTo(1.5);
    console.log(reactFlowInstance.getElements());
  }

  const elements = [
    { id: '1', data: { label: 'Node 1' }, position: { x: 0, y: 0 } },
    // you can also pass a React component as a label
    { id: '2', data: { label: <div>Node 2</div> }, position: { x: -100, y: 80 } },
    { id: 'e1-2', type:'step', source: '1', target: '2', arrowHeadType:'arrow', animated: false },
    { id: '3', data: { label: <div><Node/></div>}, position: { x: 100, y: 80 } },
    { id: 'e1-3', type:'step', source: '1', target: '3', arrowHeadType:'arrow', animated: false },

    { id: '4', data: { label: <div><Node/></div>}, connectable:true, position: { x: 100, y: 150 } },

  
  ];
  
  return (
    <ReactFlow 
      onLoad={onLoad} 
      elements={elements} 
      nodesDraggable={false}
      nodesConnectable={false}
    >
        <Controls />
    </ReactFlow>
  );

}

export default DecisionTree;
