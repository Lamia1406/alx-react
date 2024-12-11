import  React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
function Footer({user}) {
          return (
            <footer className="Footer">
              <p>
                <i>Copyright {getFullYear()} - {getFooterCopy()}</i>
              </p>
              {user && <a href='#'>Contact us</a>}
            </footer>
          );
}
export const mapStateToProps = (state) => {
  return {
    user: state.get("user")
  };
};
Footer.defaultProps = {
  user: null,
};
Footer.propTypes = {
  user: PropTypes.object,
};
export default connect(mapStateToProps, null)(Footer);