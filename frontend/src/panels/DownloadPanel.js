import React, {Component} from "react";
import classNames from "classnames";
import withStyles from "react-jss";

const styles = {
    button: {
        color: "white",
        fontWeight: "bold",
        width: "100%",
        textAlign: "center",
        lineHeight: "32px",
        '& i': {
            fontSize: "30px"
        },
        '&:hover': {
            color: "white",
            textDecoration: "none"
        }
    },
    buttonContainer: {
        maxWidth: "200px"
    }
};

class DownloadPanel extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 className="mt-5">Download</h1>
                <div
                    className={
                        classNames(
                            "d-flex flex-column download-container mx-auto mb-5",
                            this.props.classes.buttonContainer
                        )
                    }>
                    <a
                        href={windows_build_file_url}
                        download="cyberstories_windows.zip"
                        className={classNames("card bg-success mx-auto my-3", this.props.classes.button)}>
                        <div
                            className="card-body">
                            WINDOWS <br/>
                            <i className="fas fa-download"/>
                        </div>
                    </a>
                    <a href={mac_build_file_url} download="cyberstories_mac.zip"
                       className={classNames("card bg-success mx-auto my-3", this.props.classes.button)}>
                        <div className="card-body">
                            MAC<br/>
                            <i className="fas fa-download"/>
                        </div>
                    </a>
                    <a
                        href={linux_build_file_url}
                        download="cyberstories_linux.zip"
                        className={classNames("card bg-success mx-auto my-3", this.props.classes.button)}>
                        <div className="card-body">LINUX<br/><i className="fas fa-download"/>
                        </div>
                    </a>
                </div>
                <p>
                    Once
                    you
                    've downloaded, checkout the documentation.
                </p>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(DownloadPanel);