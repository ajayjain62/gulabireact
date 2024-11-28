import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import Typography from '@mui/material/Typography';

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Healthy Breakfast
          </Typography>
          <Typography>
            Start your day with a balanced meal of fresh fruits and oats.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <FitnessCenterIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Exercise
          </Typography>
          <Typography>
            Engage in a 30-minute workout for a healthy body and mind.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <LocalDrinkIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Hydration
          </Typography>
          <Typography>
            Stay hydrated with a refreshing coconut water or herbal tea.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <BedtimeIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Rest & Recovery
          </Typography>
          <Typography>
            A good night&apos;s sleep to rejuvenate and stay energized.
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
