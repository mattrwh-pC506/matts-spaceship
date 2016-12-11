import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { PropTypes as React_router_prop_types } from 'react-router';

import { Link, IndexLink } from 'react-router';


export default class Menu extends Component {
    render() {
        const markup = (
            <ul className= "menu" > {
                this.props.items.map((item, i) => <li key={ i } style= { style.menu.item } > { this.render_link(item) } < /li>) }</ul >
        );
                return markup;
            }

        render_link(item) {
            if (item.link === '/') {
                return <IndexLink to={ item.link } style = { style.menu.item.link } activeClassName= "menu-item-selected" className= "menu-item" > { item.name } < /IndexLink>;
            }
            return <Link to={ item.link } style = { style.menu.item.link } activeClassName= "menu-item-selected" className= "menu-item" > { item.name } < /Link>;
        }
    }
