using System;
using System.Collections.Generic;
using System.Text;

namespace WageDoc.ViewModel
{
    public class DailyPageViewModel
    {
        private decimal _dailyWage;
        public decimal DailyWage
        {
            get => _dailyWage;
            set => _dailyWage = (TimeEnd.Hour - TimeBegin.Hour)* HourlyWage ;
        }
        private decimal _hourlyWage;
        public decimal HourlyWage
        {
            get => _hourlyWage;
            set => _hourlyWage = value;
        }

        public DailyPageViewModel()
        {
            HourlyWage = 5;
        }

        public DateTime TimeBegin { get; set; }
        public DateTime TimeEnd { get; set; }


    }
}
