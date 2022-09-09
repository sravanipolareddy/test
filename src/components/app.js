import * as React from "react";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import TransactionsTable from "./transactionsTable";
import TransactionForm from "./transactionForm";
import { calculatePoints, getTransactions, calculateMonthlyPoints } from "../utils";

export default function App() {
  const [data, setData] = React.useState([]); // TransactionData for the transaction table
  const [monthlyData,setMonthlyData] = React.useState([]); // MonthlyData for the Points table
  
  React.useEffect(() => {
    const getData = async () => {
      const data = await getTransactions(); // get transactions
      data.sort((a,b) => new Date(b.date) - new Date(a.date));
      setData([...data]);
      setMonthlyData(calculateMonthlyPoints(data)) // calculate monthly data
    }
    getData();
  }, []);
  
  // Delete a transaction
  const deleteTransaction = id => {
    const removeIndex = data.map(item => item.id).indexOf(id);
    ~removeIndex && data.splice(removeIndex, 1);
    data.sort((a,b) => new Date(b.date) - new Date(a.date));
    setData([...data]);
    setMonthlyData(calculateMonthlyPoints(data))
  }
 // Add new Transaction
  const addTransaction = amount => {
    //construct a new transaction record
    const transaction = { id: Math.floor(Math.random()* 1000),
      name: "New",
      date: new Date().toLocaleDateString(), 
      amount, points: calculatePoints(amount)
    }
    const newTransactionData = [transaction, ...data];
    newTransactionData.sort((a,b) => new Date(b.date) - new Date(a.date));
    setData(newTransactionData);
    setMonthlyData(calculateMonthlyPoints(newTransactionData))
  }

  return (
     <Box title="parent-container" sx={{ flexGrow: 1, marginX: 10 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <TransactionForm monthlyData={monthlyData} addTransaction={addTransaction}/>
        </Grid>
        <Grid item xs={12} >
        <TransactionsTable data={data} deleteTransaction={deleteTransaction}/>
        </Grid>
      </Grid>
    </Box>
  );
}