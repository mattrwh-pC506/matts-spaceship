import * as React from 'react';
import { Component } from 'react';

import { title } from 'react-isomorphic-render';

export class HomePage extends Component<any, any> {
    render() {
        const husky = require('../../../../assets/images/husky.jpg');

        const markup = (
            <section className="content">
                <span>{ title("Home")}</span>
                <h1>Husky</h1>
                <img src={ husky }/>
            </section>
		);

        return markup;
    }
}
