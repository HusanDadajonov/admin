// import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Card,
  Typography,
  Container,
  // Alert, 
  styled
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import useAuth from 'src/hooks/useAuth';
import FirebaseAuthLogin from '../LoginFirebaseAuth';
import JWTLogin from '../LoginJWT';
import AmplifyLogin from '../LoginAmplify';

const Content = styled(Box)(
  () => `
    display: block;
    width: 100%;
`
);

const MainContent = styled(Box)(
  () => `
  padding: 100px 0 0 0;
  // width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
);


function LoginCover() {
  const { method } = useAuth();
  const { t } = useTranslation();

  return (
    <>
    {/* <Box 
      sx={{
       width: '100%',
       height: '100%', 
       display: 'flex',
      justifyContent: 'center',
       position: 'absolute',
      }}
    >
      <Box sx={{
          width: 300,
          height: 200,
          margin: '10px 10px 0 70%',
          display: 'inline-block',
          // justifyContent: 'revert',
          // position: "absolute"
          // display: 'block'
          // backgroundColor: 'white',
          // '&:hover': {
          //   backgroundColor: 'primary.main',
          //   opacity: [0.9, 0.8, 0.7],
          // },
        }}> 
        <Alert variant="filled" severity="success">
              {t("This is a success alert — check it out!")}
        </Alert>
      </Box>
    </Box> */}
      <Helmet>
        <title>Login - Cover</title>
      </Helmet>
      <Content>
        <MainContent>
          <Container
            sx={{
              display: 'flex',
              alignItems: 'center',
              // width:'100%',
              justifyItems: 'center',
              // flexDirection: 'column'
            }}
            maxWidth="sm"
          >
            <Card
              sx={{
                p: 4,
                my: 4
              }}
            >
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  sx={{
                    mb: 1
                  }}
                >
                  {t('Sign in')}
                </Typography>
                <Typography
                  variant="h4"
                  color="text.secondary"
                  fontWeight="normal"
                  sx={{
                    mb: 3
                  }}
                >
                  {t('Fill in the fields below to sign into your account.')}
                </Typography>
              </Box>
              {/* {method === 'Auth0' && <Auth0Login />} */}
              {method === 'FirebaseAuth' && <FirebaseAuthLogin />}
              {method === 'JWT' && <JWTLogin />}
              {method === 'Amplify' && <AmplifyLogin />}
            </Card>
          </Container>
        </MainContent>
      </Content>
    </>
  );
}

export default LoginCover;
