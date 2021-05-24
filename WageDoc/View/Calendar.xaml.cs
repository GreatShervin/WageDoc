using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace WageDoc.View
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class Calendar : ContentPage
    {
       
        
        public Calendar()
        {
            InitializeComponent();
           
        }


        //public void generateCalendar()
        //{
        //    for(int y = 0; y < 5 ; y++)
        //    {
        //        gridCalendar.ColumnDefinitions.Add(new ColumnDefinition());
        //        for(int x = 0; x < 7; x++)
        //        {
        //            gridCalendar.RowDefinitions.Add(new RowDefinition());
        //        }
        //    }
        //}

        //public void addObjectCalendar()
        //{
        //    for (int y = 0; y < 6; y++) 
        //    {
        //        for(int x =0; x<7; x++)
        //        {
        //            gridCalendar.Children.Add(new BoxView
        //            {
        //                BackgroundColor = Color.Red,
        //                HeightRequest =75,
        //                WidthRequest= 40
        //            } ,x,y) ;
        //        }

        //    }
        //}


    }
}