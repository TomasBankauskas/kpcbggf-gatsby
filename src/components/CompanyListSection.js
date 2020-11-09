import React from 'react';
import _ from 'lodash';

import CompanyListItem from './CompanyListItem';

export default class CompanyListSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section className="section section--companies mb-2">
            	{_.get(section, 'title', null) && (
            	<h2 className="section__title mb-2">{_.get(section, 'title', null)}</h2>
            	)}
            	{_.get(section, 'companies', null) && (
            	<ul className="grid">
            		{_.map(_.get(section, 'companies', null), (company, company_idx) => (
            			<CompanyListItem key={company_idx} {...this.props} company={company} />
            		))}
            	</ul>
            	)}
            </section>
        );
    }
}
