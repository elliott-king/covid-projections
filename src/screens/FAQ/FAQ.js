import React from 'react';
import Typography from '@material-ui/core/Typography';

import { Wrapper, Content } from './FAQ.style';

const FAQ = ({ children }) => {
  return (
    <Wrapper>
      <Content>
        <Typography variant="h3" component="h1">
          General
        </Typography>

        <Typography variant="h5" component="h5">
          What are the definitions for "social distancing" and "stay at home"?
        </Typography>
        <Typography variant="body1" component="p">
          Definitions <a href="https://bit.ly/394SJ9I">are available here</a>.
        </Typography>

        <Typography variant="h5" component="h5">
          How are "social distancing" and "stay at home" different?
        </Typography>
        <Typography variant="body1" component="p">
          Definitions and a comparison{' '}
          <a href="https://bit.ly/394SJ9I">are available here</a>.
        </Typography>

        <Typography variant="h5" component="h5">
          What are the specific policies for my state?
        </Typography>
        <Typography variant="body1" component="p">
          The New York Times has a list of{' '}
          <a href="https://www.nytimes.com/interactive/2020/us/coronavirus-stay-at-home-order.html">
            specific state-by-state policies
          </a>
          .
        </Typography>

        <Typography variant="h5" component="h5">
          What are the symptoms of COVID-19?
        </Typography>
        <Typography variant="body1" component="p">
          The Centers for Disease Control and Prevention has a list of{' '}
          <a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">
            COVID-19 symptoms
          </a>
          .
        </Typography>

        <Typography variant="h5" component="h5">
          Where/how should I get tested?
        </Typography>
        <Typography variant="body1" component="p">
          The Centers for Disease Control and Prevention has additional
          information on{' '}
          <a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/testing.html">
            when and how to get tested
          </a>
          .
        </Typography>

        <Typography variant="h5" component="h5">
          What should I do if I think I am sick?
        </Typography>
        <Typography variant="body1" component="p">
          The Centers for Disease Control and Prevention provides advice on{' '}
          <a href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html">
            what to do if you think you are sick
          </a>
          .
        </Typography>

        <Typography variant="h5" component="h5">
          Where can I get more information about COVID-19?
        </Typography>
        <Typography variant="body1" component="p">
          The Centers for Disease Control and Prevention has additional
          information on{' '}
          <a href="https://www.cdc.gov/coronavirus/2019-ncov/index.html">
            COVID-19
          </a>
          .
        </Typography>

        <Typography variant="h5" component="h5">
          Should I wear a mask in public?
        </Typography>
        <Typography variant="body1" component="p">
          The World Health Organization has advice on{' '}
          <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/when-and-how-to-use-masks">
            when and how to use face masks
          </a>
          .
        </Typography>

        <Typography variant="h5" component="h5">
          Where/when will I get more my stimulus check?
        </Typography>
        <Typography variant="body1" component="p">
          The Internal Revenue Service has additional information on{' '}
          <a href="https://www.irs.gov/coronavirus">economic impact payments</a>
          .
        </Typography>

        <Typography variant="h3" component="h1">
          Model
        </Typography>

        <Typography variant="h5" component="h5">
          Can I view the model?
        </Typography>
        <Typography variant="body1" component="p">
          Yes, the model is public, and{' '}
          <a href="https://bit.ly/391uB80">can be viewed here</a>. Reference
          materials, including assumptions, logic, and definitions{' '}
          <a href="https://bit.ly/394SJ9I">are available here</a>.
        </Typography>

        <Typography variant="h5" component="h5">
          How often does the model update?
        </Typography>
        <Typography variant="body1" component="p">
          At a minimum, the model is updated every four days.
        </Typography>

        <Typography variant="h5" component="h5">
          When was the last update?
        </Typography>
        <Typography variant="body1" component="p">
          See the last updated date stamp on the state page.
        </Typography>

        <Typography variant="h5" component="h5">
          What are the current limitations of the model?
        </Typography>
        <Typography variant="body1" component="p">
          Here is a non-exhaustive list:
        </Typography>
        <Typography>
          <ul>
            <li>
              Only a small fraction of the world has been infected. It’s a new
              disease. Variables will change.
            </li>
            <li>
              R0s for interventions are guesses, in some cases informed by data.
              There is no historical precedent for what is going on right now to
              draw from.
            </li>
            <li>
              The default R0 used in this model is an average. The model does
              not adjust for the population density, culturally-determined
              interaction frequency and closeness, humidity, temperature, etc in
              calculating R0.
            </li>
            <li>
              This is not a node-based analysis, and thus assumes everyone
              spreads the disease at the same rate. In practice, there are some
              folks who are “super-spreaders,” and others who are almost
              isolated. Interventions should be targeted primarily at those most
              likely to spread the disease.
            </li>
            <li>
              Only hospital beds at aggregate are considered. ICU beds and
              ventilators, which are likely to run low before beds, are not
              considered.
            </li>
            <li>
              Demographics, populations, and hospital bed counts are outdated.
              Demographics for the USA as a whole are used, rather than specific
              to each state.
            </li>

            <li>
              In containment cases, we do not deal with the longer-term impacts
              of maintaining containment, primarily the concern with avoiding
              reintroduction of the disease due to incoming travelers. 14-day
              mandatory border quarantines, such as those currently in place in
              China, would likely need to continue until a vaccine or
              therapeutic is developed.
            </li>
          </ul>
        </Typography>
      </Content>
    </Wrapper>
  );
};

export default FAQ;
