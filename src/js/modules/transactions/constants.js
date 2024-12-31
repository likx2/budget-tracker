import incomeIcon from '../../../assets/income.svg';
import entertainmentIcon from '../../../assets/entertainment.svg';
import billsIcon from '../../../assets/bills.svg';
import housingIcon from '../../../assets/housing.svg';
import transportationIcon from '../../../assets/transportation.svg';

export const TRANSACTIONS_KEY = 'transactions';

export const MAP_CATEGORIES_TO_COLOR = {
    income: '#c2410c',
    entertainment: '#ca8a04',
    bills: '#2563eb',
    housing: '#57534e',
    transportation: '#059669',
};

export const MAP_CATEGORIES_TO_ICON = {
    income: incomeIcon,
    entertainment: entertainmentIcon,
    bills: billsIcon,
    housing: housingIcon,
    transportation: transportationIcon,
};


export const TRANSACTION_CATEGORIES = {
    positive: [
        'income'
    ],
    negative: [
        'entertainment',
        'bills',
        'housing',
        'transportation',
    ],
};

