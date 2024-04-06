
export function formateDate(dateString) {
    // Create a new Date object from the input date string
    const date = new Date(dateString);

    // Get the day, month, and year components from the Date object
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    // Define an array of month names
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    // Get the month name from the array using the month index
    const monthName = months[monthIndex];

    // Construct the formatted date string
    const formattedDate = `${day}-${monthName}-${year}`;

    return formattedDate;
}