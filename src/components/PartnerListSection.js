import React from 'react';
import _ from 'lodash';

import {getPages} from '../utils';
import PartnerListItem from './PartnerListItem';

export default class PartnerListSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let partners_all = getPages(this.props.pageContext.pages, '/partner');
        let partners_sorted = _.orderBy(partners_all, 'frontmatter.order');
        return (
            <section className="section section--partners mb-4">
            	{_.get(section, 'title', null) && (
            	<h2 className="section__title mb-2 mb-md-3">{_.get(section, 'title', null)}</h2>
            	)}
            	<ul className="grid">
            		{_.map(partners_sorted, (partner, partner_idx) => {
            		    let is_partner = false;
            		    if ((_.get(partner, 'frontmatter.template', null) === 'partner')) {
            		         is_partner = true;
            		    }
            		    return (<React.Fragment key={partner_idx + '.1'}>
                			{is_partner && (
                				<PartnerListItem key={partner_idx} {...this.props} partner_list_section={section} partner_page={partner} />
                			)}
                		</React.Fragment>)
            		})}
            	</ul>
            </section>
        );
    }
}
