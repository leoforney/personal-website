import React from 'react';
import DetailView from "./DetailView.jsx";
import Typography from "@mui/material/Typography";
import withRouter from "./withRouter.jsx";

class ProjectDetailPage extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
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
