import { Grid } from '@mui/material';   
import Results from './Results/Results';

function GridTable() {

  const invoices = [
    {
      amount: 1497,
      clientAvatar: "/static/images/avatars/1.jpg",
      clientName: "Nlounge",
      currency: "$",
      dueDate: 1653936900553,
      id: "1",
      issuedDate: 1653926100553,
      number: "INV 5262",
      status: "progress",
    },
    {
      amount: 1497,
      clientAvatar: "/static/images/avatars/1.jpg",
      clientName: "Nlounge",
      currency: "$",
      dueDate: 1653936900553,
      id: "2",
      issuedDate: 1653926100553,
      number: "INV 5262",
      status: "pending",
    },
    {
      amount: 1497,
      clientAvatar: "/static/images/avatars/1.jpg",
      clientName: "Nlounge",
      currency: "$",
      dueDate: 1653936900553,
      id: "3",
      issuedDate: 1653926100553,
      number: "INV 5262",
      status: "completed",
    },
    {
      amount: 1497,
      clientAvatar: "/static/images/avatars/1.jpg",
      clientName: "Nlounge",
      currency: "$",
      dueDate: 1653936900553,
      id: "4",
      issuedDate: 1653926100553,
      number: "INV 5262",
      status: "draft",
    },
  ]

  return (
    <Grid
    sx={{
      px: 4
    }}
    container
    direction="row"
    justifyContent="center"
    alignItems="stretch"
    spacing={4}
  >
    <Grid item xs={12}>
      <Results invoices={invoices} />
    </Grid>
  </Grid>
  )
}
 
export default  GridTable