var D = {
   month_list : {"Jan":"01","Feb":"02","Mar":"03","Apr":"04","May":"05","Jun":"06","Jul":"07","Aug":"08","Sep":"09","Oct":10,"Nov":11,"Dec":12},
   month_day_count:{01:31,02:28,03:31,04:30,05:31,06:30,07:31,08:31,09:30,10:31,11:30,12:31},
   today: new Date(),
   oneDay: (60*60*24*1000),
   todayWithTime: function(){
      // this method returns the today's Date with a time part
      return this.today; 
   },
   
   todayWithoutTime: function(){
      // this method returns the today's Date without the time part,
      // this method returns a day part in YYYY-MM-DD from the formatDateWithDashes
      return this.formatDateWithDashes(this.today)
   },
   
   formatDateWithDashes:function(date){
      // returns YEAR-MONTH-DAY
      var i = 0;
      var d = date.toString().split(" ");
      for( i = 0; i < 3; i++ ) d.pop(); // removes the time related information
      d.shift();// removes the weekday
      return d[2]+"-"+this.month_list[ d[0]]+"-"+d[1];
   },
   
   isLeapYear:function(date){
      // this method returns true if the year with the date is a leap year else false
      // this method expects the input date to be of type date
      var year;
      year = date.toString().split(" ")[3];
      return ( !(year % 4) && (year % 100) ) || !(year % 400) ? true : false;
   },
   
   previousDay:function(date){
      // this method returns the previous day of the input date
      // expects the input date to be of type date
      var d = date.getTime();
      return new Date( d - this.oneDay );
   },
   
   nextDay: function(date){
      // this method returns the next day of the input date
      // expects the input date to be of type date
      var d = date.getTime();
      return new Date( d + this.oneDay );
   },
   
   tomorrow: function(){
      // this method returns tomorrow
      return this.nextDay( this.today );
   },
   
   yesterday: function(){
      // this method returns yesterday
      return this.previousDay( this.today );  
   },
   
   lastSaturday: function(date){
      // this method returns the last saturday of the input date,
      // expects the input date to be of type
      var thisDay = date.getTime();
      var day = date.getDay();
      return new Date( thisDay - this.oneDay*(day) );
   },
   
   lastSunday: function(date){
      // this method returns the last sunday of the input date,
      // expects the input date to be of type
      var thisDay = date.getTime();
      var day = date.getDay();
      return new Date( thisDay - this.oneDay*(day) );
   },
   
   nextSaturday: function(date){
      // this method returns the next saturday of the input date,
      // expects the input date to be of type
      var thisDay = date.getTime();
      var day = date.getDay();    
      return new Date( thisDay + this.oneDay*(6-day) );
   },
   
   thisWeek: function(date){
      // week starts on sunday and ends on a saturday,
      // so when this function on a day,
      // it will return an two element array, which contains the sunday before that day and saturday after that day.
      // if the day is a sunday, it will return the same as the first element of the result.
      // it the day is a saturday, it will return the same as the second element of the result.
      return [this.lastSunday(date), this.nextSaturday(date)];
   },
   
   lastWeek: function(date){
      // this method returns a two element array containing the sunday and saturday of the last week of the input date,
      // expects the input date to be of type
      var lastSunday = this.lastSunday(date);
      var lastSaturday = this.previousDay(lastSunday);
      var lastWeek = this.thisWeek(lastSaturday);
      return lastWeek;
   },
   
   nextWeek: function(date){
      // this method returns a two element array containing the sunday and saturday of the next week of the input date,
      // expects the input date to be of type
      var nextSaturday = this.nextSaturday(date);
      var nextSunday = this.nextDay(nextSaturday);
      var nextWeek = this.thisWeek(nextSunday);
      return nextWeek;
   },
   
   addDays: function(date, num){
      var inputDate = date.getTime();
      return new Date(inputDate+(this.oneDay*num))
   },
   
   removeDays: function(date, num){
      var inputDate = date.getTime();
      return new Date(inputDate-(this.oneDay*num))
   }
}

// function ideas
// ===============
// yesterday - done
// last week range - done
// this week rane - done
// next week range - done
// custom from - to date
// lastMonth
// nextMonth
// thisMonth
// firstMonday
// firstTuesday
// firstWednesday
// firstThursday
// firstFriday
// firstSaturday
// firstSunday
// secondSaturday
// secondSunday
// lastYear
// nextYear
// isLeapYear - done
// add few days to a date - done
// remove few days to a date.
// input should be a normalized one
var d = new Date();
console.log( D.removeDays(d, 5) );