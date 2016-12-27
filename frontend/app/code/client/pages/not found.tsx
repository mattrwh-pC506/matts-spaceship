import * as React from 'react';
import { Component } from 'react'
import { title } from 'react-isomorphic-render'


export class Not_found extends Component<any, any> {
    render() {
        const markup =
            (
                <div>
                    <span>{ title("Page not found") }</span>
                    <h1>Page not found</h1>
                </div>
		)

        return markup;
    }
}
