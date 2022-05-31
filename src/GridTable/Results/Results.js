

import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Divider,
  Tooltip,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableContainer,
  TableRow,
  Typography,
  TextField,
  Grid,
  InputAdornment,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { format, formatDistance } from 'date-fns';

import LaunchTwoToneIcon from '@mui/icons-material/LaunchTwoTone';
import { useState } from 'react';
import BulkActions from './BulkActions';
import Label from './Label/Label';

function Results({ invoices }) {

    const [selectedItems, setSelectedInvoices] = useState([]);
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(5);
    const [query, setQuery] = useState('');
    const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
    const [filters, setFilters] = useState({
        status: null
    });

    const handleSelectAllInvoices = (event) => {
        setSelectedInvoices(
          event.target.checked ? invoices.map((invoice) => invoice.id) : []
        );
    };

    const handleQueryChange = (event) => {
        event.persist();
        setQuery(event.target.value);
    };

    const handleStatusChange = (e) => {
        let value = null;
    
        if (e.target.value !== 'all') {
          value = e.target.value;
        }
    
        setFilters((prevFilters) => ({
          ...prevFilters,
          status: value
        }));
    };

    const applyPagination = (invoices, page, limit) => {
        return invoices.slice(page * limit, page * limit + limit);
    };

    const applyFilters = (invoices, query, filters) => {
        return invoices.filter((invoice) => {
          let matches = true;
      
          if (query) {
            const properties = ['clientName'];
            let containsQuery = false;
      
            properties.forEach((property) => {
              if (invoice[property].toLowerCase().includes(query.toLowerCase())) {
                containsQuery = true;
              }
            });
      
            if (filters.status && invoice.status !== filters.status) {
              matches = false;
            }
      
            if (!containsQuery) {
              matches = false;
            }
          }
      
          Object.keys(filters).forEach((key) => {
            const value = filters[key];
      
            if (value && invoice[key] !== value) {
              matches = false;
            }
          });
      
          return matches;
        });
    };

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    const handleLimitChange = (event) => {
        setLimit(parseInt(event.target.value));
    };

    const handleSelectOneInvoice = (event, invoiceId) => {
        if (!selectedItems.includes(invoiceId)) {
          setSelectedInvoices((prevSelected) => [...prevSelected, invoiceId]);
        } else {
          setSelectedInvoices((prevSelected) =>
            prevSelected.filter((id) => id !== invoiceId)
          );
        }
    };

    const getInvoiceStatusLabel = (invoiceStatus) => {
        const map = {
          pending: {
            text: 'Pending Payment',
            color: 'warning'
          },
          completed: {
            text: 'Completed',
            color: 'success'
          },
          draft: {
            text: 'Draft',
            color: 'info'
          },
          progress: {
            text: 'In progress',
            color: 'primary'
          }
        };
      
        const { text, color } = map[invoiceStatus];
      
        return (
            <Label color={color}>
                <b>{text}</b>
            </Label>
        );
    };

    const handleConfirmDelete = () => {
        setOpenConfirmDelete(true);
    };


    const statusOptions = [
        {
          id: 'all',
          name: 'Show all'
        },
        {
          id: 'pending',
          name: 'Pending Payment'
        },
        {
          id: 'completed',
          name: 'Completed'
        },
        {
          id: 'draft',
          name: 'Draft'
        },
        {
          id: 'progress',
          name: 'In Progress'
        }
      ];
    

    const selectedAllInvoices = selectedItems.length === invoices.length;
    const filteredInvoices = applyFilters(invoices, query, filters);
    const selectedSomeInvoices = selectedItems.length > 0 && selectedItems.length < invoices.length;
    const paginatedInvoices = applyPagination(filteredInvoices, page, limit);
    const selectedBulkActions = selectedItems.length > 0;
  

  return (
    <>
        <Card
            sx={{
            p: 2,
            mb: 3,
            display: 'flex',
            alignItems: 'center'
            }}
        >
            <Grid alignItems="center" container spacing={3}>
                <Grid item xs={12} lg={7} md={6}>
                    <TextField
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <SearchTwoToneIcon />
                        </InputAdornment>
                        )
                    }}
                    sx={{
                        m: 0
                    }}
                    onChange={handleQueryChange}
                    placeholder={'Search invoices by client name ...'}
                    value={query}
                    fullWidth
                    variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} lg={5} md={6}>
                    <FormControl fullWidth variant="outlined">
                    <InputLabel>{'Status'}</InputLabel>
                    <Select
                        value={filters.status || 'all'}
                        onChange={handleStatusChange}
                        label={'Status'}
                    >
                        {statusOptions.map((statusOption) => (
                        <MenuItem key={statusOption.id} value={statusOption.id}>
                            {statusOption.name}
                        </MenuItem>
                        ))}
                    </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Card>
        <Card>
            <Box pl={2} display="flex" alignItems="center">
                <Checkbox
                    checked={selectedAllInvoices}
                    indeterminate={selectedSomeInvoices}
                    onChange={handleSelectAllInvoices}
                />
                {selectedBulkActions && (
                    <Box flex={1} p={2}>
                        <BulkActions />
                    </Box>
                )}
                {!selectedBulkActions && (
                    <Box
                    flex={1}
                    p={2}
                    display={{ xs: 'block', sm: 'flex' }}
                    alignItems="center"
                    justifyContent="space-between"
                    >
                    <Box>
                        <Typography component="span" variant="subtitle1">
                        {'Showing'}:
                        </Typography>{' '}
                        <b>{paginatedInvoices.length}</b> <b>{'invoices'}</b>
                    </Box>
                    <TablePagination
                        component="div"
                        count={filteredInvoices.length}
                        onPageChange={handlePageChange}
                        onRowsPerPageChange={handleLimitChange}
                        page={page}
                        rowsPerPage={limit}
                        rowsPerPageOptions={[5, 10, 15]}
                    />
                    </Box>
                )}
            </Box>
        <Divider />
        {paginatedInvoices.length === 0 ? (
          <Typography
            sx={{
              py: 10
            }}
            variant="h3"
            fontWeight="normal"
            color="text.secondary"
            align="center"
          >
            {"We couldn't find any invoices matching your search criteria"}
          </Typography>
        ) : (
          <>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>{'#'}</TableCell>
                    <TableCell>{'Date'}</TableCell>
                    <TableCell>{'Client'}</TableCell>
                    <TableCell>{'Amount'}</TableCell>
                    <TableCell>{'Status'}</TableCell>
                    <TableCell align="center">{'Actions'}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedInvoices.map((invoice) => {
                    const isInvoiceSelected = selectedItems.includes(
                      invoice.id
                    );
                    return (
                      <TableRow
                        hover
                        key={invoice.id}
                        selected={isInvoiceSelected}
                      >
                        <TableCell>
                          <Box display="flex" alignItems="center">
                            <Checkbox
                              checked={isInvoiceSelected}
                              onChange={(event) =>
                                handleSelectOneInvoice(event, invoice.id)
                              }
                              value={isInvoiceSelected}
                            />
                            <Box pl={1}>
                              <Typography noWrap variant="subtitle2">
                                {invoice.number}
                              </Typography>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Typography noWrap>
                            {format(invoice.issuedDate, 'MMMM dd yyyy')}
                          </Typography>
                          <Typography noWrap variant="subtitle1">
                            {'Due'}{' '}
                            <b>
                              {formatDistance(
                                invoice.dueDate,
                                invoice.issuedDate,
                                {
                                  addSuffix: true
                                }
                              )}
                            </b>
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Box display="flex" alignItems="center">
                            <Avatar
                              sx={{
                                mr: 1
                              }}
                              src={invoice.clientAvatar}
                            />
                            <Typography variant="h5">
                              {invoice.clientName}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          {`${invoice.currency}0,0.00`}
                        </TableCell>
                        <TableCell>
                          <Typography noWrap>
                            {getInvoiceStatusLabel(invoice.status)}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography noWrap>
                            <Tooltip title={'View'} arrow>
                              <IconButton
                                to={`/management/invoices/single/${invoice.id}`}
                                color="primary"
                              >
                                <LaunchTwoToneIcon fontSize="small" />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title={'Delete'} arrow>
                              <IconButton
                                onClick={handleConfirmDelete}
                                color="primary"
                              >
                                <DeleteTwoToneIcon fontSize="small" />
                              </IconButton>
                            </Tooltip>
                          </Typography>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            <Box p={2}>
              <TablePagination
                component="div"
                count={filteredInvoices.length}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleLimitChange}
                page={page}
                rowsPerPage={limit}
                rowsPerPageOptions={[5, 10, 15]}
              />
            </Box>
          </>
        )}
        </Card>
    </>
  )
}
 
export default Results
