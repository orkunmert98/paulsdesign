import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { addToCart } from '../../store/actions/cartActions';

import axios from 'axios';
import config from "../../config/config.json";

// import components
import ProductMainListItem from './ProductMainListItem';
import ProductSmallListItem from "./ProductSmalListItem";

import {Button} from "@material-ui/core";
import Pagination from '@material-ui/lab/Pagination';
import FilterSlider from "./FilterSlider";
import ContactBar from './ContactBar';
import {compose} from "redux";

import withStyles from "@material-ui/core/styles/withStyles";
import FilterSelect from "./FilterSelect";
import SideCategoryBar from './SideCategoryBar';
const useStyles = (theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },

    paginationUl : {
        alignItems : 'center',
        justifyContent : 'center'
    }
});

class ShopVTwo extends Component {
    constructor(props){
        super(props);
        this.state = {
            direct_products: null, // from server
            filterValue : [0, 60],       // temp
            defaultValue : [0, 60],
            productCount : 0,
            paginationCount : 0
        }
    }

    async componentDidMount() {
        await axios.get(config.ALL_PRODUCTS)
        .then(response => {
            if (response.data.length > 0) {
                this.setState({
                    direct_products : response.data,
                    productCount : response.data.length,
                    paginationCount : Math.floor(response.data.length / 10),
                });
            }
        })
        .catch((error) => {
        })
    }

    onChangefilter = (event, newValue) => {
        this.setState({
            filterValue : newValue
        });
    };

    handleAddToCart = (id) => {
        this.props.addToCart(id); 
    };

    render() {
        let { products, classes } = this.props;
        return (
            <section className="product-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Our products</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row">
                    <div className="col-lg-4 col-md-12">
                        <div className="sidebar-area">
                            <div className="widget widget-search" style={{paddingRight:'40px'}}>
                                <form>
                                    <input type="text" className="form-control" placeholder="Search" />
                                    <button type="button"><i className="icofont-search-2"></i></button>
                                </form>
                            </div>

                            <div className='widget' style={{paddingBottom:'40px'}}>
                                <h3 className="widget-title">Filter by price</h3>
                                <div className="bar"></div>
                                <div style={{padding:'0 20% 0 10px'}}>
                                    <FilterSlider
                                        // value={this.state.filterValue}
                                        defaultValue={this.state.defaultValue}
                                        max={this.state.defaultValue[1]}
                                        onChangeCommitted={this.onChangefilter}
                                        valueLabelDisplay="auto"
                                        aria-labelledby="range-slider"
                                    />
                                    <div>
                                        <div style={{float:'left'}}>
                                            <Button variant="contained" color="default">Filter</Button>
                                        </div>
                                        <div style={{float:'right'}}>
                                            <label>Price : {'$'}{this.state.filterValue[0]} - {'$'}{this.state.filterValue[1]}</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='widget widget_product_categories'>
                                <SideCategoryBar/>
                            </div>
                            <div className='widget widget_product_categories'>
                                <ContactBar/>
                            </div>
                        </div>
                    </div>

                        <div className="col-lg-8 col-md-12">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <div className="row justify-content-between align-items-center" style={{paddingBottom:'40px'}}>
                                        <div className="col-5">
                                            <label style={{marginBottom:'0'}}>Showing {1} - {this.state.productCount} of {this.state.productCount} Results</label>
                                        </div>
                                        <div className="col-7 align-items-center justify-content-end" style={{display:'flex'}}>
                                            <label style={{fontWeight:'bold', marginBottom:'0'}}>Sort by</label>
                                            <FilterSelect/>
                                        </div>
                                    </div>
                                </div>

                                {this.state.direct_products ? this.state.direct_products.map((data, idx) => (
                                    <div className="col-lg-12 col-md-12" key={idx}>
                                        <ProductMainListItem
                                            imageSrc={config.SERVER_BASE_URL + data.imageurl}
                                            productName={data.name}
                                            currency={'$'}
                                            currentPrice={data.price}
                                            oldPrice={data.price - 3}
                                            ratingValue={data.rating}
                                            description={
                                                'The full monty brilliant young delinquent burke naff baking cakes the wireless argy-bargy smashing, ' +
                                            'squifffy chimney pot 1 he nicked it twit brolly spend a penny he legged it, cup of tea is ruddy grub.!' +
                                                'The full monty brilliant young delinquent burke naff baking cakes the wireless argy-bargy smashing'}
                                        />
                                    </div>
                                )) : "No products"}


                            </div>
                            {
                                this.state.paginationCount > 0 &&
                                <div className='row'>
                                    <div className='col-12 align-items-center'>
                                        <Pagination
                                            classes={{ul : classes.paginationUl}}
                                            count={this.state.paginationCount}
                                            color="secondary"
                                            shape='round'
                                            boundaryCount={3}
                                        />
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.cart.products
    }
};

const mapDispatchToProps= (dispatch) => {
    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
};

export default compose(
    withStyles(useStyles),
    connect(
        mapStateToProps,
        mapDispatchToProps
))(ShopVTwo);