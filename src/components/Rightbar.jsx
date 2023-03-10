import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/3.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://material-ui.com/static/images/avatar/7.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Avatar alt="Agnes Walker" src="" />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/8.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/7.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/8.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsTocabDKPzZDc-J2HvwMKqvclNIsvn-SMlw&usqp=CAU"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnlqWiqUPzPmpA1qo5KuCXsO9htPgr6UrOA&usqp=CAU"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" ??? I'll be in your neighborhood doing errands this???"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" ??? Wish I could come, but I'm out of town this???"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' ??? Do you have Paris recommendations? Have you ever???'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
