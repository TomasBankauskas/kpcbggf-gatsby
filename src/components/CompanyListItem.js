import React from 'react';
import _ from 'lodash';

import {getData, Link, withPrefix} from '../utils';

export default class CompanyListItem extends React.Component {
    render() {
        let company = _.get(this.props, 'company', null);
        let company_data = getData(this.props.pageContext.site.data, company);
        return (
            (company_data.url && company_data.logo) && (
            <li className="company cell-12 cell-sm-6 cell-md-4 cell-lg-3 mb-3">
            	<Link className="company__thumb block p-1" to={withPrefix(company_data.url)}>
            		<img className="block mx-auto" src={withPrefix(company_data.logo)} alt={company_data.title} loadinglazy />
            	</Link>
            </li>
            )
        );
    }
}
