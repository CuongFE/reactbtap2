import React from 'react';
import PropTypes from 'prop-types';




Baitap1.propTypes = {
    albumList: PropTypes.array.isRequired,
    
};

function Baitap1(props) {
    return (
        <div style={{display:'flex', width:'100%', marginInline:12}}>
            <div>
                <img  style={{width:'100%', height:200 }}  alt='t-shirt' src='https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'/>
            </div>

            <div style={{marginLeft:20}}>
                <h3>{props.text}</h3>
                <p style={{color: props.color}}>{props.text1}</p>
                <p style={{color: props.color}}>{props.text2}</p>
                <p style={{color: props.color}}>{props.text3}</p>
                <p style={{color: props.color}}>{props.text4}</p>
            </div>

        </div>
       
    );
}

export default Baitap1;