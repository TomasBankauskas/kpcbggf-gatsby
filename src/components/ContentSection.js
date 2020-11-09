import React from 'react';
import _ from 'lodash';

import {markdownify} from '../utils';

export default class ContentSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section className="section section--content mb-4">
            	{_.get(section, 'title', null) && (
            	<h2 className="section__title mb-2">{_.get(section, 'title', null)}</h2>
            	)}
            	{_.get(section, 'content', null) && (
            		markdownify(_.get(section, 'content', null))
            	)}
            </section>
        );
    }
}
