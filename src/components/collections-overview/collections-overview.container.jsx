import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';

import {selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from '../collections-overview/collections-overview.component';
import collectionsOverviewComponent from '../collections-overview/collections-overview.component';

const mapStateToProps = createStructuredSelector({
	isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = compose(connect(mapStateToProps)(WithSpinner(CollectionsOverview)));

export default CollectionPageContainer;
