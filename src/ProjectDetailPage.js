import React from 'react';
import DetailView from "./DetailView";
import Typography from "@mui/material/Typography";
import withRouter from "./withRouter";

class ProjectDetailPage extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        const { match } = this.props;

        return (
            <div>
                <Typography variant="h2" gutterBottom>
                    Freelance projects
                </Typography>
                <DetailView filename={this.props.params.name}/>
            </div>
        )
    }

}

export default withRouter(ProjectDetailPage);
