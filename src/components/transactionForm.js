import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions, TextField, Dialog } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import MonthlyDataTable from "./monthlyData";

export default function TransactionForm(props) {
    const { monthlyData } = props;

    // State for add-transaction dialog
    const [open, setOpen] = React.useState(false);

    // form state for the input
    const [amount, setAmount] = React.useState(0);
    const [isAmountInvalid, setAmountInValid] = React.useState(false);

    const handleClickOpen = () => {
        setAmount(0);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    const addTransaction = () => {
        if (amount <= 0) {
            setAmountInValid(true); // form validation for positive numbers
        } else {
            props.addTransaction(amount);
            handleClose();
        }
    }

    return (
        <Card sx={{ marginTop: 10 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Points Summary
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    As a customer you will receive 1 point for every dollar spent over $50
                    and 2 points
                    for every dollar spent over $100 for each transaction.
                </Typography>
                <MonthlyDataTable data={monthlyData} />
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={handleClickOpen}>
                    Add Transaction
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Add Transaction</DialogTitle>
                    <DialogContent>
                        <FormControl error={isAmountInvalid} variant="filled" fullWidth>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="amount"
                                label="Transaction Amount"
                                type="number"
                                fullWidth
                                variant="standard"
                                error={isAmountInvalid}
                                value={amount}
                                inputProps={{
                                    maxLength: 5
                                }}
                                onChange={(e) => {
                                    setAmount(e.target.value);
                                    setAmountInValid(false);
                                }}
                            />
                            {isAmountInvalid && (<FormHelperText id="name-error-text"> *Positive numbers only </FormHelperText>)}
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={addTransaction} disabled={isAmountInvalid}>Add</Button>
                    </DialogActions>
                </Dialog>
            </CardActions>
        </Card>
    );
}