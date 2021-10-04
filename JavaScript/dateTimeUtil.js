function getNextWeekdayDateInSecs (date, dayOfTheWeek) {
  const newDate = new Date(date * 1000)
  newDate.setDate(
    newDate.getDate() + ((dayOfTheWeek - 1 - newDate.getDay() + 7) % 7) + 1
  )

  return Math.round(newDate / 1000)
}
