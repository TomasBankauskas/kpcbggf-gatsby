import React from 'react';
import _ from 'lodash';

import {Link, classNames, withPrefix} from '../utils';
import Icon from './Icon';

export default class SocialLink extends React.Component {
    render() {
        let link = _.get(this.props, 'link', null);
        return (
            <Link className={classNames('url', 'org', 'btn', {'btn--icon': _.get(link, 'has_icon', null)})} to={(_.get(link, 'url', null).startsWith('mailto') ? (_.get(link, 'url', null)) : withPrefix(_.get(link, 'url', null)))} {...(_.get(link, 'new_window', null) ? ({target: '_blank', rel: 'noopener'}) : null)}>
            	{(_.get(link, 'has_icon', null) && _.get(link, 'icon', null)) && (
            		<Icon {...this.props} icon={_.get(link, 'icon', null)} />
            	)}
            	<span className={classNames({'sr-only': _.get(link, 'has_icon', null)})}>{_.get(link, 'title', null)}</span>
            </Link>
        );
    }
}
