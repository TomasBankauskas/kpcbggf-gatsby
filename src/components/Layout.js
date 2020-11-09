import React from 'react';
import {Helmet} from 'react-helmet';
import _ from 'lodash';

import '../sass/main.scss';
import Header from './Header';

export default class Body extends React.Component {
    render() {
        let meta_title = _.get(this.props, 'pageContext.site.siteMetadata.title', null);
        let meta_description = _.get(this.props, 'pageContext.site.siteMetadata.description', null);
        if (_.get(this.props, 'pageContext.frontmatter.meta_title', null)) {
             meta_title = _.get(this.props, 'pageContext.frontmatter.meta_title', null);
        }
        if (_.get(this.props, 'pageContext.frontmatter.meta_description', null)) {
             meta_description = _.get(this.props, 'pageContext.frontmatter.meta_description', null);
        }
        return (
            <React.Fragment>
                <Helmet>
                    <title>{meta_title}</title>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initialScale=1.0" />
                    <meta name="google" content="notranslate" />
                    <meta name="description" content={meta_description}/>
                    <meta name="twitter:card" content="summary"/>
                    <meta name="twitter:site" content="@kleinerperkins"/>
                    <meta name="twitter:creator" content="@kleinerperkins"/>
                    <meta name="twitter:title" content={meta_title}/>
                    <meta name="twitter:description" content={meta_description}/>
                    <meta property="og:title" content={meta_title}/>
                    <meta property="og:description" content={meta_description}/>
                    <meta property="og:site_name" content={_.get(this.props, 'pageContext.site.siteMetadata.title', null)}/>
                </Helmet>
                <div className="site">
                	<Header {...this.props} />
                	<main id="main-content" className="main-content py-3 py-md-5">
                		{this.props.children}
                	</main>
                </div>
            </React.Fragment>
        );
    }
}
