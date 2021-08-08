import { Spinner } from 'react-bootstrap';

export const LoadingSpinner = ( formStatus ) => {

    if (formStatus.props.showStatus) {
            return (
                <>
                { 
                    formStatus.props.showSpinner ? 
                    <>
                    <Spinner animation="border" variant="danger" role="status" className="spinner-show">
                    <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    { 
                        formStatus.props.message ? 
                        <div className="form-submit-status" dangerouslySetInnerHTML={formStatus.props.message}></div> :
                        <div className="form-submit-status"></div> 
                    }
                    </>
                     : 
                    <>
                    <Spinner animation="border" variant="danger" role="status" className="spinner-hide">
                    </Spinner>
                    {
                        formStatus.props.message ? 
                        <div className="form-submit-status" dangerouslySetInnerHTML={formStatus.props.message}></div> :
                        <div className="form-submit-status"></div> 
                    }
                    </>
                }
                </>
            )
    } else {
            return (
                <>
                <Spinner animation="border" variant="danger" role="status" className="spinner-hide">
                </Spinner>
                </>
            )
    }
}

export default LoadingSpinner;

