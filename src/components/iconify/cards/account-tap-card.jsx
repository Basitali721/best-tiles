import React from 'react';
import { Card, CardContent, Tab, Tabs, Typography } from '@mui/material';

export function UnderlineTabs() {
  const [activeTab, setActiveTab] = React.useState(0);
  const data = [
    {
      label: 'Description',
      value: 'desc',
      head: 'About This Game',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat, tortor sed luctus vehicula, nisi risus pretium turpis, vel varius magna nulla a diam. Ut lacinia ipsum id luctus fermentum. Phasellus eget libero eu mauris suscipit hendrerit. Sed aliquam libero in ligula euismod bibendum. Vivamus consectetur est et nisi consequat, a suscipit urna cursus. Vestibulum non justo nec lectus pretium varius. Sed posuere justo nec massa vehicula, et gravida ex sodales. Nulla facilisi. Integer pretium nulla vel sem tincidunt rhoncus. Vivamus congue euismod massa sit amet consectetur. Sed at odio ex. Donec at ornare enim. Nullam aliquam ex id nulla sollicitudin fringilla. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat, tortor sed luctus vehicula, nisi risus pretium turpis, vel varius magna nulla a diam. Ut lacinia ipsum id luctus fermentum. Phasellus eget libero eu mauris suscipit hendrerit. Sed aliquam libero in ligula euismod bibendum. Vivamus consectetur est et nisi consequat, a suscipit urna cursus. Vestibulum non justo nec lectus pretium varius. Sed posuere justo nec massa vehicula, et gravida ex sodales. Nulla facilisi. Integer pretium nulla vel sem tincidunt rhoncus. Vivamus congue euismod massa sit amet consectetur. Sed at odio ex. Donec at ornare enim. `,
    },
    {
      label: 'Screenshots',
      value: 'scr',
    },
    {
      label: 'Reviews',
      value: 'rev',
    },
  ];

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Card sx={{ mt: 10, bgcolor: '#0C0020', borderRadius: '10px', px: 10, py: 5 }}>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        // paddindX=
        variant="scrollable"
        scrollButtons="auto"
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            label={label}
            sx={{
              border: 'none',
              cursor: 'pointer',
              px: '16px',
              borderRight: '1px solid white',
              py: '8px',
              outline: 'none',
              display: 'flex',
              justifyContent: 'space-between',
              color: 'white',
              fontFamily: 'Quantico',
              fontWeight: 400,
              fontSize: '40px',
              '@media (max-width:600px)': {
                fontSize: '10px',
              },
              transition: 'border-bottom 0.3s',
              '&:hover': {
                borderBottom: activeTab === 1 ? '1px solid blue' : '2px solid blue',
                textShadow:
                  '0 0 9px rgba(0, 191, 255, 0.5), 0 0 9px rgba(255, 255, 255, 0.7), 0 0 9px rgba(0, 191, 255, 0.8)',
              },
            }}
          />
        ))}
      </Tabs>
      {data.map(({ value, desc, head }, index) => (
        <CardContent key={value} sx={{ mt: 5, display: activeTab === index ? 'block' : 'none' }}>
          <Typography
            variant="h2"
            sx={{ fontFamily: 'Montserrat', fontSize: { xs: '20px', md: '30px' }, fontWeight: 500 }}
          >
            {head}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: 'Montserrat', fontSize: '16px', fontWeight: 300 }}
          >
            {desc}
          </Typography>
        </CardContent>
      ))}
    </Card>
  );
}
