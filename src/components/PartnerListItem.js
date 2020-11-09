import React from 'react';
import _ from 'lodash';

import {Link, withPrefix} from '../utils';

export default class PartnerListItem extends React.Component {
    render() {
        let section = _.get(this.props, 'partner_list_section', null);
        let partner = _.get(this.props, 'partner_page', null);
        return (
            <li className="partner cell-12 cell-sm-6 cell-md-3 mb-3">
            	<Link className="partner__thumb block" to={withPrefix(_.get(partner, 'url', null))}>
            		{_.get(partner, 'frontmatter.image_thumb', null) && (
            		<img className="block mb-1" src={withPrefix(_.get(partner, 'frontmatter.image_thumb', null))} alt={_.get(partner, 'frontmatter.name', null)} loadinglazy />
            		)}
            		{_.get(section, 'title', null) ? (
            		<h3 className="partner__name font-normal m-0">{_.get(partner, 'frontmatter.name', null)}</h3>
            		) : 
            		<h2 className="partner__name font-normal m-0">{_.get(partner, 'frontmatter.name', null)}</h2>
            		}
            	</Link>
            </li>
        );
    }
}
