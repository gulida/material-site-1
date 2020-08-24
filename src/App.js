import React from 'react';
import './App.css';
import {
  Container,
  IconButton,
  Toolbar,
  Grid,
  AppBar,
  Paper,
  Typography,
  Box,
  Button,
  CardMedia,
  CardContent,
  Card,
  CardActions
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu'
import LayerIcon from '@material-ui/icons/Layers'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  },
  mainFeaturesPost: {
    position: 'relative',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),

    backgroundSize: "cover",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "center"
  },
  mainFeaturesPostContent: {
    position: 'relative',
    padding: theme.spacing(6),
    marginTop: theme.spacing(8)
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundOverlay: "rgba(0, 0, 0, .3)"
  },
  cardMedia: {
    paddingTop: "66.25%"
  },
  cardContent: {
    flexGrow: 1
  },
  cardGrid: {
    marginTop: theme.spacing(4)
  }
}))

const card = [1, 2, 3, 4, 5, 6, 7, 8, 9,]

function App() {
  const classes = useStyles()
  return (
    <>
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar>

            <IconButton edge="start"
                        color="inherit"
                        aria-label="menu"
                        className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6"
                        className={classes.title}>Web Developer Blog</Typography>

            <Box mr={3}>
              <Button color="inherit" variant="outlined">Log In</Button>
            </Box>

            <Button color="secondary" variant="contained">Sign Up</Button>
          </Toolbar>
        </Container>
      </AppBar>

      <main>
        <Paper className={classes.mainFeaturesPost}
               style={{ backgroundImage: `url(https://source.unsplash.com/random`}}
        >
          <Container fixed>
            <Grid container >
              <Grid item md={6}>
                <div className={classes.overlay} />
                <div className={classes.mainFeaturesPostContent}>

                  <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom
                    >
                    Web Developer Blog
                  </Typography>

                  <Typography
                    variant="h5"
                    color="inherit"
                    paragraph
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    A aliquid architecto atque cum deserunt ex explicabo impedit,
                    maxime mollitia nihil non numquam quibusdam quisquam tempora vitae,
                    voluptate voluptates? Cupiditate, laboriosam.
                  </Typography>

                  <Button variant="contained" color="secondary">Learn more</Button>

                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>

        <div className={classes.mainContent}>
          <Container maxWidth="md">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Web Developer Blog
            </Typography>

            <Typography variant="h5"
                        align="center"
                        color="textSecondary" paragraph
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              quia temporibus voluptatibus. Aliquid blanditiis earum eum
              exercitationem facere in, iusto odit porro
              quos saepe tempora voluptates. Blanditiis dicta
              optio suscipit!Web Developer Blog
            </Typography>

            <div className={classes.mainButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">Start Now</Button>
                </Grid>

                <Grid item>
                  <Button variant="outlined" color="primary">Learn More</Button>
                </Grid>
              </Grid>

            </div>

          </Container>

        </div>

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4} >
            {
              card.map(card => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title" />
                      <CardContent className={classes.cardContent}>
                        <Typography variant="h5" gutterBottom>
                          Blog Post
                        </Typography>

                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          Consequatur cumque, dicta dolores molestias
                          quidem sequi tempore voluptatibus. Mollitia, porro, unde!
                        </Typography>

                        <CardActions>
                          <Button size="small" color="primary">
                            View
                          </Button>

                          <Button size="small" color="primary">
                            Edit
                          </Button>

                          <LayerIcon />
                          <PlayCircleFilledIcon />
                        </CardActions>
                      </CardContent>
                  </Card>
                </Grid>
              ))
            }
          </Grid>
        </Container>
      </main>
    </>
  );
}

export default App;
