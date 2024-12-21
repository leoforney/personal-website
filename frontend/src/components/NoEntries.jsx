import {Box, Typography} from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

export function NoEntries() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                marginTop: '16px',
            }}
        >
            <SentimentVeryDissatisfiedIcon
                sx={{ fontSize: 48, color: 'gray', marginBottom: '8px' }}
            />
            <Typography variant="h6" color="textSecondary">
                No entries... yet!
            </Typography>
        </Box>
    );
}