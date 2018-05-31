var createReactClass = require('create-react-class');
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Winner from './Winner';
import Vote from './Vote';
import React from 'react';

export default createReactClass({
mixins: [PureRenderMixin],
  render: function() {
    return <div>
      {this.props.winner ?
        <Winner ref="winner" winner={this.props.winner} /> :
        <Vote {...this.props} />}
    </div>;
  }
});