import React from 'react';
import Typography from "@mui/material/Typography";
import ReactMarkdown from 'react-markdown'
import {Card, CardActions, CardContent} from "@mui/material";
import rehypeRaw from 'rehype-raw';
import './DetailView.css';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import {orange} from "@mui/material/colors";
import Button from "@mui/material/Button";
import { getAnalytics, logEvent } from "firebase/analytics";
import { firebaseApp } from "./WebsiteFirebaseConfig";

const analytics = getAnalytics(firebaseApp)

export function CustomCodeBlock({ as, href, ...otherProps }) {
    return (
        <div className={"scrollBlock"}>
            <code {...otherProps} />
        </div>
    )
}

export function CustomImageBlock({ as, href, ...otherProps }) {
    return (
        <div>
            <br/>
            <Box src={otherProps.src} alt={otherProps.alt} component={"img"} sx={{
                width: "100%",
                height: "auto",
                maxWidth: "400px"
            }}/>
            <br/>
        </div>
    )
}


class DetailView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            markdown: ""
        }
    }

    componentDidMount() {
        if (this.props.description !== null) {
            fetch('/cases/' + this.props.filename + ".md")
                .then(response => response.text())
                .then(data => this.setState({markdown: data}));
            logEvent(analytics, 'project_detail_opened',
                {
                    name: this.props.filename
                });
        }

    }

    render() {

        var textBlock = <div />;

        if (this.props.description) {
            textBlock = (<div>
                <Typography variant={"h4"}>
                    {this.props.filename}
                </Typography>
                <br/>
                <Typography variant={"h6"}>
                    {this.props.description}
                </Typography>
            </div>);
        } else {
            textBlock = <ReactMarkdown rehypePlugins={[rehypeRaw]} components={{
                // Use `CustomLink` instead of anchor element `a`
                code: CustomCodeBlock,
                img: CustomImageBlock
            }}>{this.state.markdown}</ReactMarkdown>
        }

        var backgroundColor = null;

        if (this.props.description) {
            backgroundColor = orange[50];
        }

        var actionBlock = null;

        if (this.props.description) {
            actionBlock = (
                <CardActions>
                    <Button href={"/projects/" + this.props.filename}>Learn More</Button>
                </CardActions>
            );
        }

        return (
            <Card sx={{pt: 2, pb: 2, pl: 5, pr: 5, mt: 5, mb: 5, background: backgroundColor}} onClick={() => {
                if (this.props.description) {
                    window.location.href = '/projects/' + this.props.filename;
                }
            }}>
                <CardContent>
                    <Typography variant="body1">
                        {textBlock}
                    </Typography>
                </CardContent>
                {actionBlock}
            </Card>

        )
    }

}

export default DetailView;
