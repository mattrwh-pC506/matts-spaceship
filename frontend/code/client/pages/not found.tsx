import React, { Component } from 'react'
import { title } from 'react-isomorphic-render'


export default class Not_found extends Component {
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
