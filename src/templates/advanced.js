import React from 'react';
import _ from 'lodash';
import {graphql} from 'gatsby';

import components, {Layout} from '../components/index';
import {classNames} from '../utils';

// this minimal GraphQL query ensures that when 'gatsby develop' is running,
// any changes to content files are reflected in browser
export const query = graphql`
  query($url: String) {
    sitePage(path: {eq: $url}) {
      id
    }
  }
`;

export default class Advanced extends React.Component {
    render() {
        let hide_title = false;
        if (_.get(this.props, 'pageContext.frontmatter.hide_page_title', null)) {
             hide_title = true;
        }
        return (
            <Layout {...this.props}>
            <div className="container maxw-large">
            	<header className={classNames('hero', 'mb-3', {'sr-only': hide_title})}>
            		<h1 className="hero__title">{_.get(this.props, 'pageContext.frontmatter.title', null)}</h1>
            	</header>
            	{_.map(_.get(this.props, 'pageContext.frontmatter.sections', null), (section, section_idx) => {
            	    let component = _.upperFirst(_.camelCase(_.get(section, 'type', null)));
            	    let Component = components[component];
            	    return (
                		<Component key={section_idx} {...this.props} section={section} site={this.props.pageContext.site} page={this.props.pageContext} />
                	)
            	})}
            </div>
            </Layout>
        );
    }
}
