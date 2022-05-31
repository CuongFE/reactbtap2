import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import styles from './styles.module.css';




Baitap2.propTypes = {
    albumList: PropTypes.array.isRequired,
    
};

function Baitap2(props) {
    return (
        <div style={{width:'100%', marginInline:12}}>
            <div>
                <img style={{ width:'50%'}}alt='t-shirt' src='https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/4k-uhd/pdp/un65nu8000fxza/1_UN65NU8000FXZA_001_Front_Black_013018.jpg?$product-details-jpg$'/>
            </div>

            <div style={{marginLeft:25}}>
                <h4>{props.text}</h4>
                <p style={{color: props.color}}>{props.text1}</p>
                <p style={{color: props.color2, fontSize: props.size}}>{props.text2}</p>
                <p>${props.price}</p>
            </div>

            

        </div>
       
    );
}

export default Baitap2;