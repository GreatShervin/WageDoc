using System;
using System.Collections.Generic;
using System.Text;

namespace WageDoc.Model
{
    class Month
    {
        int day = 0;
        public int Id { get; set; }
        public string Name { get; set; }
        public int year { get; set; }
        public int Days
        {

            get
            {
                
                if (Id == 2)
                {
                    if ((year % 4) == 0)
                    {
                        day = 29;
                    }
                    else
                    {
                        day = 28;
                    }
                }
                else if ((Id % 2) == 0)
                {
                    day = 30;
                }
                else
                {
                    day = 31;
                }
                return day;
            }
            set
            {
                day = value;
            }
        }
    }
}
