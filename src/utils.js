import { REWARDS } from "./constants";
import TransactionsData from "./mockData";

// Calculate Points based on the transaction amount
export const calculatePoints = amount => {
    let rewards = 0;
    if (amount < REWARDS.ONE_POINT_LIMIT) {
        rewards = 0;
    }
    if (amount >= REWARDS.ONE_POINT_LIMIT && amount <= REWARDS.TWO_POINTS_LIMIT) {
        rewards += ((amount - REWARDS.ONE_POINT_LIMIT));
    }
    if (amount > REWARDS.TWO_POINTS_LIMIT) {
        rewards += ((amount - REWARDS.TWO_POINTS_LIMIT) * 2) + REWARDS.ONE_POINT_LIMIT;
    }
    return rewards;
}

// Get the mock transaction data
export const getTransactions = () => new Promise((resolve) => {
    const data = TransactionsData;
    const formattedData = data.map((transaction) => (
        {...transaction, points: calculatePoints(transaction.amount)}
    ));
    resolve(formattedData);
});

// Calculate Points per month based on the transaction date
export const calculateMonthlyPoints = data => {
    let monthlyData = [];

    const groupByMonth = data.reduce((group, transaction) => {
        const category = new Date(transaction.date).toLocaleString('default', { month: 'long' });
        group[category] = group[category] ?? [];
        group[category].push({ points: transaction.points });
        return group;
    }, {});

    for (const month in groupByMonth) {
        let totalPoints = 0;
        groupByMonth[month].forEach(item => totalPoints += item.points)
        monthlyData.push({ month, points: totalPoints, monthNumber: new Date(month+'-1-01').getMonth()+1})
    }
    // Sort by month
    monthlyData.sort((a,b) => a.monthNumber - b.monthNumber);

    return monthlyData;
}
