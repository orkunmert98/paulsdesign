import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Typography, Toolbar, IconButton, Collapse} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expandButton: {
        transform: 'rotate(0deg)',
        padding : '0',
        position : 'absolute',
        marginLeft: 'auto',
        color : '#fff',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

const SideCategoryBar = (props) => {
    const [bExpand, SetExpand] = React.useState(false);

    const handleExpandClick = () => {
        SetExpand(!bExpand);
    };

    return (
        <div className='side-category-wrapper'>
            <div className='category-header'>
                <div>
                    <MenuIcon/>
                </div>
                <div style={{paddingLeft : '10px'}}>
                    All Categories
                </div>
                <IconButton
                    color="inherit"
                    style={{position:'absolute', right:'0', padding:'0', transition : '200ms', marginRight : '25px',
                        transform : bExpand ? 'rotate(0deg)' : 'rotate(180deg)'
                    }}
                    onClick={handleExpandClick}
                    aria-expanded={bExpand}
                    aria-label="show more"
                >
                    <ExpandIcon/>
                </IconButton>
            </div>
            <Collapse in={bExpand} timeout={"auto"} unmountOnExit className='category-body'>
                <ul style={{padding: '20px'}}>
                    <li><a href="#"><i className="icofont-bubble-right"></i> Menu Board screens</a></li>
                    <li><a href="#"><i className="icofont-bubble-right"></i> TV screens</a></li>
                    <li><a href="#"><i className="icofont-bubble-right"></i> Monitors</a></li>
                    <li><a href="#"><i className="icofont-bubble-right"></i> Commercial Lite monitors</a></li>
                    <li><a href="#"><i className="icofont-bubble-right"></i> Full Commercial monitors</a></li>
                    <li><a href="#"><i className="icofont-bubble-right"></i> Video Wall screens</a></li>
                    <li><a href="#"><i className="icofont-bubble-right"></i> Outdoor screens</a></li>
                </ul>
            </Collapse>
        </div>
    );
};

export default SideCategoryBar;