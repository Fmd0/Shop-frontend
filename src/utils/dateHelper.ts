
export const convertDateToString = (date: Date) => {
    const monthAndDay =
        Intl.DateTimeFormat('en-US', {month: 'long', day: "numeric"}).format(date);
    const year = date.getFullYear();
    return year === new Date().getFullYear()?monthAndDay:monthAndDay+" "+year;
}