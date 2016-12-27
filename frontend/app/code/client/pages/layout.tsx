import * as React from 'react';
import { Component, PropTypes } from 'react'
import { head } from 'react-isomorphic-render'
import Menu from '../components/menu'


export class Layout extends Component<any, any> {
    static propTypes = {
        children: PropTypes.object.isRequired
    };

    render() {
        const title = 'WebApp';
        const description = 'A generic web application boilerplate';
        const meta = [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no' },
            { property: 'og:title', content: 'Matthew Whitt Portfolio' },
            { property: 'og:description', content: 'Collected works of Matthew Whitt, Software Engineer and Web Developer' },
            { property: 'og:locale', content: 'en-US' },
        ]

        const menu_items = [
            { name: 'Home', link: '/', },
        ];

        const markup = (
            <div className="content">
                <span>{ head(title, meta) }</span>
                
                {/* header */ }
                <header>
                    {/* Navigation */ }
                    {/*<nav>*/ }
                    {/* main menu */ }
                    <Menu items={ menu_items } />
                    {/*</nav>*/ }
                </header>
                { this.props.children }
                <footer></footer>
            </div>
		);

        return markup;
    }
}
