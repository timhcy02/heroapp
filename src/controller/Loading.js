
const Actions = require('Redux').Action;

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
		displayLoading: ()=>{
            dispatch(Actions.loading.api('loadingFromUi'));
        },
        removeLoading: ()=> {
            dispatch(Actions.loading.apiSuccess('loadingFromUi'));
        }
    }
}

module.exports = mapDispatchToProps;