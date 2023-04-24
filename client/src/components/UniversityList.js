import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  universityCard: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  universityCardContent: {
    flexGrow: 1,
  },
}));

function UniversityList({ universities }) {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      {universities.map((university) => (
        <Grid item key={university.id} xs={12} sm={6} md={4}>
          <Card className={classes.universityCard}>
            <CardContent className={classes.universityCardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {university.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {university.location}
              </Typography>
              <Typography
                variant="body2"
                color="primary"
                component="a"
                href={university.website}
              >
                {university.website}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default UniversityList;
