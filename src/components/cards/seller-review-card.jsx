/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Rating,
  Button,
  Dialog,
  DialogContent,
  Stack,
  TextField,
} from '@mui/material';
import { ThemeModeColor } from 'src/utils/theme-mode-color';
import { secondaryFont } from 'src/theme/typography';

const SellerReviewCard = ({ review, reviewType }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Card sx={{ bgcolor: ThemeModeColor('#CDC2EB', '#2D1964') }}>
        <CardContent>
          <Typography
            sx={{
              fontSize: '10px',
              textAlign: 'right',
              fontWeight: 400,
            }}
          >
            Product: <span style={{ fontWeight: 600 }}>AdVenture Capitalist</span>
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <img
                src="/assets/icons/AvatarCircle.svg"
                alt=""
                style={{ width: '24px', height: '24px' }}
              />
              <Typography sx={{ fontSize: '12px', mt: 1, fontWeight: 600 }}>UserName</Typography>
            </Box>
            <Rating
              name="half-rating-read"
              defaultValue={2.5}
              precision={0.5}
              readOnly
              size="small"
            />
          </Box>
          <Typography sx={{ fontSize: '12px', mt: 1, fontWeight: 300 }}>
            {review?.reviewText}
          </Typography>
          {review?.sellerReply && (
            <>
              <Typography sx={{ fontSize: '12px', my: 2, fontWeight: 600 }}>Your Reply</Typography>
              <Box
                sx={{
                  border: '1px solid',
                  borderColor: ThemeModeColor('#000000', '#fff'),
                  borderRadius: '10px',
                  py: '10px',
                  px: '16px',
                }}
              >
                <Typography sx={{ fontSize: '10px', fontWeight: 600 }}>
                  Lorem ipsum dolor sit amet epilobga consec sed id massa morbi porta malesuada
                  dictum. Lorem ipsum dolor sit amet consectetur sed id massa Lorem ipsum dolor sit
                  amet malesu
                </Typography>
              </Box>
            </>
          )}
          <Box display="flex" mt="30px" gap="9px">
            <Button variant="contained" color="success" sx={{ fontSize: '11px' }}>
              Approve
            </Button>
            {/* <Button variant="contained" color="primary" sx={{fontSize: '11px'}}>Reject</Button>
          <Button variant="contained"  sx={{fontSize: '11px',bgcolor:"#1F143D"}}>Edit Reply</Button>  */}
            <Button
              variant="contained"
              onClick={() => setOpen(true)}
              sx={{
                fontSize: '11px',
                bgcolor: '#1F143D',
                border: '0.6px solid #575DFF80',
                ':hover': { background: '#0C0020' },
              }}
            >
              Reply
            </Button>

            <Button variant="contained" color="primary" sx={{ fontSize: '11px' }}>
              Request to delete
            </Button>
          </Box>
        </CardContent>
      </Card>
      {open && (
        <Dialog
          fullWidth
          maxWidth="sm"
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="report-seller"
          aria-describedby="report-seller-description"
          // PaperProps={{ sx: { background: (theme) => theme.palette.background.default } }}
          PaperProps={{ sx: { background: ThemeModeColor('#eeeaf8', '#0C0020') } }}
        >
          <DialogContent>
            <Box width={1} px={{ md: '70px', xs: '20px', sm: '20px' }} sx={{ textAlign: 'center' }}>
              <Typography
                color={ThemeModeColor('#000', '#fff')}
                fontSize={28}
                textAlign="center"
                mb={3}
                mt={2}
                fontFamily={secondaryFont}
                sx={{
                  textShadow:
                    '0px 0px 25px rgba(255, 255, 255, 0.51), 0px 0px 25px rgba(255, 255, 255, 0.25)',
                }}
              >
                Your Reply
              </Typography>

              <Stack sx={{ justifyContent: 'center', gap: 1 }}>
                <Typography color={ThemeModeColor('#000', '#fff')} fontSize="14px" fontWeight={300}>
                  Submit your Reply
                </Typography>
                <TextField
                  placeholder="Type your reply here....."
                  multiline
                  rows={10}
                  variant="outlined"
                  fullWidth
                />
              </Stack>
              <Box
                display="flex"
                justifyContent={{ md: 'space-between', sm: 'space-between' }}
                flexWrap={{ xs: 'wrap' }}
                sx={{ my: { md: '50px', xs: '20px', sm: '30px', gap: '20px' } }}
              >
                <Button
                  variant="contained"
                  color="success"
                  sx={{
                    fontSize: '18px',
                    fontWeight: 600,
                    px: { md: '55px', xs: '75px', sm: '75px' },
                  }}
                >
                  Update
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    fontSize: '18px',
                    fontWeight: 600,
                    px: { md: '55px', xs: '75px', sm: '75px' },
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default SellerReviewCard;
