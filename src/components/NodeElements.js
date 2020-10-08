import React, { useState, useEffect } from 'react';
import firebaseDB from '../firebase';
import TreeChart from './TreeChart';
import Node from './Node';

const NodeElements = () => {

  const [nodesArray, setNodesArray] = useState([]);

  useEffect(() => {
    firebaseDB.child('nodes').on('value', snapshot => {
      if (snapshot.val() !== null) {
        setNodesArray([...nodesArray, ...Object.values(snapshot.val())]);
      }
    });
  }, []);

  console.log(nodesArray);
  
  const addNode = (obj) => {
    firebaseDB.child('nodes').push(
      obj,
      err => {
        if (err) {
          console.log(err);
        }
      }
    );
  }
  
  const editNode = (obj, id) => {
    firebaseDB.child(`nodes/${id}`).set(
      obj,
      err => {
        if (err) {
          console.log(err);
        }
      }
    );
  }
  
  const deleteNode = (id) => {
    if (window.confirm('Are you sure to delete this record?')) {
      firebaseDB.child(`nodes/${id}`).remove(err => {
        if (err) {
          console.log(err);
        }
      });
    }
  }

  return (
    <TreeChart 
      // elements = {nodesArray}
      addNode = {addNode}
      editNode = {editNode}
      deleteNode = {deleteNode}
    />
  );
    
}

export default NodeElements;








// const elements = [
//   // you can also pass a React component as a label
//   { id: '1', data: { label: 'Node 1' }, position: { x: 0, y: 0 } },
//   { id: '2', data: { label: <div>Node 2</div> }, position: { x: -100, y: 80 } },

//   { id: 'e1-2', type:'step', source: '1', target: '2', arrowHeadType:'arrow', animated: false },

//   { id: '3', data: { label: <div><Node/></div>}, position: { x: 100, y: 80 } },

//   { id: 'e1-3', type:'step', source: '1', target: '3', arrowHeadType:'arrow', animated: false },

//   { id: '4', data: { label: <div><Node/></div>}, connectable:true, position: { x: 100, y: 150 } },
// ];



  // const elements = [
  //   { id: '101', data: { label: 'Node 1' }, position: { x: -500, y: 0 } },
  //   { id: '102', data: { label: <Node/> }, position: { x: -300, y: 0 } },
  //   { id: '103', data: { label: <Node/> }, position: { x: -100, y: 0 } },
  //   { id: '100', data: { label: <Node addNew/> }, position: { x: 300, y: 0 } },
  // ];
