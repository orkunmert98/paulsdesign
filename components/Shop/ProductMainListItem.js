import React from 'react';
import Link from "next/link";

import {Button, IconButton} from "@material-ui/core";
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
class ProductMainListItem extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="single-product row mx-0">
                <div className="product-img col-lg-5 px-0">
                    <img src={this.props.imageSrc} alt="item" />
                </div>
                <div className="product-content col-lg-7 py-3">
                    <div className='row'>
                        <div className='col-8'>
                            <h3 style={{marginBottom : 0}}>
                                <Link href="#">
                                    <a>{this.props.productName}</a>
                                </Link>
                            </h3>
                        </div>
                        <div className='col-4'>
                            <Rating
                                style={{zIndex:'0'}}
                                name='rate1'
                                defaultValue={this.props.ratingValue}
                                readOnly={true}
                                precision={0.1}
                                emptyIcon={<StarBorderIcon fontSize="inherit"/>}
                            />
                        </div>
                    </div>
                    <h5>{this.props.currency}{this.props.currentPrice} <span style={{marginLeft:'10px'}}>{this.props.currency}{this.props.oldPrice}</span></h5>
                    <div className='description-wrapper' title={this.props.description.length > 240 && this.props.description}>
                        {
                            this.props.description.length > 240 ?
                                this.props.description.substring(0, 240) + '...' :
                                this.props.description
                        }
                    </div>
                    <div className='button-wrapper'>
                        <Button className="cart-btn" onClick={this.props.onCartAddBtnClick}>
                            Add to cart
                        </Button>
                        <IconButton style={{marginLeft:'20px'}} className="show-btn" onClick={this.props.onShowBtnClick}>
                            <i className='icofont-eye'></i>
                        </IconButton>
                    </div>

                </div>
            </div>
        )
    }
}

export default ProductMainListItem;