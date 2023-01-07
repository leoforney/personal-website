import React from 'react';
import Typography from "@mui/material/Typography";
import ReactMarkdown from 'react-markdown'
import {Card, CardContent} from "@mui/material";
import rehypeRaw from 'rehype-raw';
import './DetailView.css';
import CssBaseline from "@mui/material/CssBaseline";

export function CustomCodeBlock({ as, href, ...otherProps }) {
    return (
        <div className={"scrollBlock"}>
            <code {...otherProps} />
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
        // Simple GET request using fetch
        fetch('cases/' + this.props.filename)
            .then(response => response.text())
            .then(data => this.setState({markdown: data}));
    }

    render() {
        return (
            <Card sx={{pt: 2, pb: 2, pl: 5, pr: 5, mt: 5, mb: 5}}>
                <CardContent>
                    <Typography variant="body1">
                        <ReactMarkdown rehypePlugins={[rehypeRaw]} components={{
                            // Use `CustomLink` instead of anchor element `a`
                            code: CustomCodeBlock,
                        }}>{this.state.markdown}</ReactMarkdown>
                    </Typography>
                </CardContent>
            </Card>

        )
    }

}

export default DetailView;
