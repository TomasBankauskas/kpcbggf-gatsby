import React from 'react';
import _ from 'lodash';

import {Link, withPrefix} from '../utils';

export default class Header extends React.Component {
    render() {
        return (
            <header className="header inverse">
            	<div className="container">
            		<nav className="header__nav flex items-center" aria-label="Main Navigation">
            			<Link className="sr-only" to="#main-content">Skip to main content</Link>
            			{_.get(this.props, 'pageContext.site.siteMetadata.header.logo', null) ? (
            			<Link className="header__logo inline-flex items-center" to={withPrefix('/')}><img className="block" src={withPrefix(_.get(this.props, 'pageContext.site.siteMetadata.header.logo', null))} width="64" alt={_.get(this.props, 'pageContext.site.siteMetadata.header.title', null)} /></Link>
            			) : 
            			<Link className="header__title font-bold" to={withPrefix('/')}>{_.get(this.props, 'pageContext.site.siteMetadata.header.title', null)}</Link>
            			}
            		</nav>
            	</div>
            </header>
        );
    }
}
