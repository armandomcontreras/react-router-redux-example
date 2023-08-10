import React from 'react';

export default function ListExpenses(props) {
    console.log(props);
    console.log(props.match.params?.id);
    const expenseType = props.atch.params.id ?? 'All';
  return (
      <div>
          List Expenses ({ expenseType })
          </div>
  )
}
