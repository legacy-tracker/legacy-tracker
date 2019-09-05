import React from "react";

export default function NewsFormatTime(props) {
  var time = props.time;

  const splitTime = time.split(" ");

  const day = splitTime[0];
  const hour = splitTime[1];

  const splitDay = day.split("-");
  const splitHour = hour.split(":");

  const newDay = splitDay[1] + "/" + splitDay[2];
  const newHour = splitHour[0] + ":" + splitHour[1];

  console.log(splitDay);
  console.log(splitHour);

  function getDay(month, day) {
    if (day === "01") {
      var newDay = "1";
    } else if (day === "02") {
      var newDay = "2";
    } else if (day === "03") {
      var newDay = "3";
    } else if (day === "04") {
      var newDay = "4";
    } else if (day === "05") {
      var newDay = "5";
    } else if (day === "05") {
      var newDay = "5";
    } else if (day === "06") {
      var newDay = "6";
    } else if (day === "07") {
      var newDay = "7";
    } else if (day === "08") {
      var newDay = "8";
    } else if (day === "09") {
      var newDay = "9";
    }
    if (month === "01" && day > 9) {
      return "January " + day;
    } else if (month === "01" && day < 10) {
      return "January " + newDay;
    } else if (month === "02" && day > 9) {
      return "February " + day;
    } else if (month === "02" && day < 10) {
      return "February " + newDay;
    } else if (month === "03" && day > 9) {
      return "March " + day;
    } else if (month === "03" && day < 10) {
      return "March " + newDay;
    } else if (month === "04" && day > 9) {
      return "April " + day;
    } else if (month === "04" && day < 10) {
      return "April " + newDay;
    } else if (month === "05" && day > 9) {
      return "May " + day;
    } else if (month === "05" && day < 10) {
      return "May " + newDay;
    } else if (month === "06" && day > 9) {
      return "June " + day;
    } else if (month === "06" && day < 10) {
      return "June " + newDay;
    } else if (month === "07" && day > 9) {
      return "July " + day;
    } else if (month === "07" && day < 10) {
      return "July " + newDay;
    } else if (month === "08" && day > 9) {
      return "August " + day;
    } else if (month === "08" && day < 10) {
      return "August " + newDay;
    } else if (month === "09" && day > 9) {
      return "September " + day;
    } else if (month === "09" && day < 10) {
      return "September " + newDay;
    } else if (month === "10" && day > 9) {
      return "October " + day;
    } else if (month === "10" && day < 10) {
      return "October " + newDay;
    } else if (month === "11" && day > 9) {
      return "November " + day;
    } else if (month === "11" && day < 10) {
      return "November " + newDay;
    } else if (month === "12" && day > 9) {
      return "December " + day;
    } else if (month === "12" && day < 10) {
      return "December " + newDay;
    } else {
      return "Unknown ";
    }
  }

  function getTime(hour, minute) {
    if (hour === "01") {
      var newHour = "1";
      var dayOrNight = "AM";
    } else if (hour === "02") {
      var dayOrNight = "AM";
      var newHour = "2";
    } else if (hour === "03") {
      var dayOrNight = "AM";
      var newHour = "3";
    } else if (hour === "04") {
      var dayOrNight = "AM";
      var newHour = "4";
    } else if (hour === "05") {
      var dayOrNight = "AM";
      var newHour = "5";
    } else if (hour === "05") {
      var dayOrNight = "AM";
      var newHour = "5";
    } else if (hour === "06") {
      var dayOrNight = "AM";
      var newHour = "6";
    } else if (hour === "07") {
      var dayOrNight = "AM";
      var newHour = "7";
    } else if (hour === "08") {
      var dayOrNight = "AM";
      var newHour = "8";
    } else if (hour === "09") {
      var dayOrNight = "AM";
      var newHour = "9";
    } else if (hour === "13") {
      var dayOrNight = "PM";
      var newHour = "1";
    } else if (hour === "14") {
      var dayOrNight = "PM";
      var newHour = "2";
    } else if (hour === "15") {
      var dayOrNight = "PM";
      var newHour = "3";
    } else if (hour === "16") {
      var dayOrNight = "PM";
      var newHour = "4";
    } else if (hour === "17") {
      var dayOrNight = "PM";
      var newHour = "5";
    } else if (hour === "18") {
      var dayOrNight = "PM";
      var newHour = "6";
    } else if (hour === "19") {
      var dayOrNight = "PM";
      var newHour = "7";
    } else if (hour === "20") {
      var dayOrNight = "PM";
      var newHour = "8";
    } else if (hour === "21") {
      var dayOrNight = "PM";
      var newHour = "9";
    } else if (hour === "22") {
      var dayOrNight = "PM";
      var newHour = "10";
    } else if (hour === "23") {
      var dayOrNight = "PM";
      var newHour = "11";
    } else if (hour === "24") {
      var dayOrNight = "PM";
      var newHour = "12";
    }

    if (hour > 9 && hour < 13 && hour != 12) {
      return hour + ":" + minute + " AM";
    } else if (hour == 12) {
      return hour + ":" + minute + " PM";
    } else {
      return newHour + ":" + minute + " " + dayOrNight;
    }
  }

  const currentTime = new Date().toString();
  const splitCurrent = currentTime.split(" ");
  const hoursMins = getTime(splitHour[0], splitHour[1]);
  const monthDayArticle = getDay(splitDay[1], splitDay[2]);
  if (
    monthDayArticle.includes(splitCurrent[1]) === true &&
    splitCurrent[2] == splitDay[2]
  ) {
    var monthDay = "Today";
  } else {
    var monthDay = monthDayArticle;
  }
  return (
    <h4 className="news-item-time">
      {monthDay} - {hoursMins}
    </h4>
  );
}
