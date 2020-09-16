import React, { Component } from 'react';

import Footer from './footer_index';

export default class Main extends Component {
    render() {
        return (
            <section className="main">
                <div className="container mb-5">
                    <h1>this is about-app</h1>
                </div>
                <div className="container mb-5">
                    <h1>this is Features section</h1>
                </div>
                <div className="container mb-5">
                    <h1>about-creator section</h1>
                </div>
                <Footer />
            </section>
        )
    }
}