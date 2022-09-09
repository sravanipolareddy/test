const createData = (id, name, date, amount) => {
  return { id, name, date, amount };
};
// Create Mock Transaction Data
const TransactionsData = [
  createData(564, "Frozen", "6/9/2022", 54),
  createData(412, "Meat", "6/19/2022", 132),
  createData(819, "Clothing", "6/29/2022", 224),
  createData(109, "Produce", "7/9/2022", 60),
  createData(661, "Bedding", "7/19/2022", 375),
  createData(812, "Furniture", "7/29/2022", 530),
  createData(236, "Hygiene", "8/6/2022", 84),
  createData(757, "Dairy", "8/2/2022", 40)
];

export default TransactionsData;

