import React from 'react';

function Chartbar(props) {
    return (
      <div style={{display: 'flex', marginInline:12, marginBottom:12, backgroundColor:'gray', height:48}}>
        <div style={{display: 'flex', backgroundColor: props.color1, width:'20%', color:'white', fontWeight:'700', justifyContent:'end', alignItems:'center', paddingRight:20}}>
            {props.text}
        </div>

        <div style={{display: 'flex',backgroundColor:'green', width:'80%', flex: 1}}>
            <div style={{display: 'flex',backgroundColor: props.color2, width:`${props.percentage}%`, alignItems:'center', paddingLeft: 20}}>
                {props.percentage}%
            </div>

            <div style={{backgroundColor:'pink', width:`${100-props.percentage}%`}}></div>
        </div>
        
      </div>
  
    );
  }

export default Chartbar;