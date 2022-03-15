import { format } from 'date-fns'

export const COLUMNS = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id',
    disableFilters: true,
    sticky: 'left'
  },
  {
    Header: 'CO #',
    Footer: 'CO #',
    accessor: 'co_number',
    sticky: 'left'
  },
  {
    Header: 'PO #',
    Footer: 'PO #',
    accessor: 'po_number',
    sticky: 'left'
  },
  {
    Header: 'Scheduled Ship Date',
    Footer: 'Scheduled Ship Date',
    accessor: 'scheduled_ship_date',
    Cell: ({ value }) => {
      return format(new Date(value), 'dd/MM/yyyy')
    }
  },
  {
    Header: 'Ship To',
    Footer: 'Ship To',
    accessor: 'ship_to'
  },
  {
    Header: 'Amount',
    Footer: 'Amount',
    accessor: 'amount'
  },
]

// export const GROUPED_COLUMNS = [
//   {
//     Header: 'Id',
//     Footer: 'Id',
//     accessor: 'id'
//   },
//   {
//     Header: 'Name',
//     Footer: 'Name',
//     columns: [
//       {
//         Header: 'First Name',
//         Footer: 'First Name',
//         accessor: 'first_name'
//       },
//       {
//         Header: 'Last Name',
//         Footer: 'Last Name',
//         accessor: 'last_name'
//       }
//     ]
//   },
//   {
//     Header: 'Info',
//     Footer: 'Info',
//     columns: [
//       {
//         Header: 'Date of Birth',
//         Footer: 'Date of Birth',
//         accessor: 'date_of_birth'
//       },
//       {
//         Header: 'Country',
//         Footer: 'Country',
//         accessor: 'country'
//       },
//       {
//         Header: 'Phone',
//         Footer: 'Phone',
//         accessor: 'phone'
//       }
//     ]
//   }
// ]
