import {
    Box,
    Button,
    TextField,
    Checkbox,
    Typography,
    Link,
    FormControlLabel,
    styled,
    Container,
    Card
  } from '@mui/material';

function SignIn() {
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
      

  return (
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
                  {'Sign in'}
                </Typography>
                <Typography
                  variant="h4"
                  color="text.secondary"
                  fontWeight="normal"
                  sx={{
                    mb: 3
                  }}
                >
                  {'Fill in the fields below to sign into your account.'}
                </Typography>
              </Box>
                <form noValidate>
                    <TextField
                        fullWidth
                        margin="normal"
                        autoFocus
                        label={'Email address'}
                        name="email"
                        type="email"
                        variant="outlined"
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label={'Password'}
                        name="password"
                        type="password"
                        variant="outlined"
                    />
                    <Box
                        alignItems="center"
                        display="flex"
                        justifyContent="space-between"
                    >
                        <FormControlLabel
                        control={
                            <Checkbox
                            name="terms"
                            color="primary"
                            />
                        }
                        label={
                            <>
                            <Typography variant="body2">
                                {'I accept the'}{' '}
                                <Link component="a" href="#">
                                {'terms and conditions'}
                                </Link>
                                .
                            </Typography>
                            </>
                        }
                        />
                    </Box>
                    <Button
                        sx={{
                        mt: 3
                        }}
                        color="primary"
                        type="submit"
                        fullWidth
                        size="large"
                        variant="contained"
                    >
                        {'Sign in'}
                    </Button>
                </form>
            </Card>
          </Container>
        </MainContent>
    </Content>
  )
}

export default SignIn
