import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const About = ({ content = [] }) => {
  const text = [
    {
      title: "We are a digital-first, life sciences commercialization company",
      description: `
        We help biopharmaceutical, emerging biotech and medical device companies develop products, get them to the market, and grow their impact 
        through the life cycle in a more effective, efficient, and modern way. We bring together healthcare domain expertise, fit-for-purpose 
        technology, and an agile operating model to provide a diverse range of solutions. These aim to deliver, amongst other outcomes, a 
        personalized, scalable and omnichannel experience for patients and physicians. It’s what drives our team and our purpose to enable healthcare 
        organizations to be future ready.
      `,
    },
  ];
 
  return (
    <Maindiv>
        <Container>
        <Row>
            <Col md={12}>
                    <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                padding: "20px",
              }}
            >
              {content.map((index, key) => (
                <Grid
                  key={key}
                  direction="column"
                  sx={{
                    maxWidth: "1200px", 
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "30px",
                      fontWeight: "900",
                      color: "#231f20",
                      margin: " 10px 0",
                      textAlign:"center",
                    }}
                  >
                    {text[index]?.title || "Title not found"}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      color: "#000000",
                      textAlign:"justify", 
                    }}
                  >
                    {text[index]?.description || "Description not found"}
                  </Typography>
                </Grid>
              ))}
            </Box>
            </Col>
        </Row>
        </Container>
    </Maindiv>
  );
};

export default About;

const Maindiv = styled.section`
  padding: 75px 0;
`;