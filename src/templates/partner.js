import React from 'react';
import _ from 'lodash';
import {graphql} from 'gatsby';

import {Layout} from '../components/index';
import {withPrefix, Link, classNames, htmlToReact} from '../utils';
import Icon from '../components/Icon';

// this minimal GraphQL query ensures that when 'gatsby develop' is running,
// any changes to content files are reflected in browser
export const query = graphql`
  query($url: String) {
    sitePage(path: {eq: $url}) {
      id
    }
  }
`;

export default class Partner extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            <article className="post bio mb-4">
            	<div className="container maxw-medium">
            		{_.get(this.props, 'pageContext.frontmatter.image', null) && (
            		<figure className="post__image mb-3">
            			<img className="block" src={withPrefix(_.get(this.props, 'pageContext.frontmatter.image', null))} alt={_.get(this.props, 'pageContext.frontmatter.name', null)} />
            		</figure>
            		)}
            		<header className="post__header flex flex-md-column items-center items-md-start mb-3 mb-md-4">
            			<h1 className="post__title flex-grow m-0">{_.get(this.props, 'pageContext.frontmatter.name', null)}</h1>
            			{_.get(this.props, 'pageContext.frontmatter.social_links', null) && (
            			<div className="hcard flex items-center mt-md-3">
            				{_.map(_.get(this.props, 'pageContext.frontmatter.social_links', null), (link, link_idx) => (
            				<Link key={link_idx} className={classNames('url', 'org', 'btn', 'ml-2', 'ml-md-0', 'mr-md-2', {'btn--icon': _.get(link, 'has_icon', null)})} to={(_.get(link, 'url', null).startsWith('mailto') ? (_.get(link, 'url', null)) : withPrefix(_.get(link, 'url', null)))} {...(_.get(link, 'new_window', null) ? ({target: '_blank', rel: 'noopener'}) : null)}>
            					{(_.get(link, 'has_icon', null) && _.get(link, 'icon', null)) && (
            						<Icon {...this.props} icon={_.get(link, 'icon', null)} />
            					)}
            					<span className={classNames({'sr-only': _.get(link, 'has_icon', null)})}>{_.get(link, 'title', null)}</span>
            				</Link>
            				))}
            			</div>
            			)}
            		</header>
            		<div className="post__body">
            			{htmlToReact(_.get(this.props, 'pageContext.html', null))}
            		</div>
            	</div>
            </article>
            </Layout>
        );
    }
}
