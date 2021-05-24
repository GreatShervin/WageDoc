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
    public partial class Tagesansicht : ContentPage
    {
        private int Von_Time;
        private int Bis_Time;
        private decimal hourlyWage;
        public Tagesansicht()
        {
            InitializeComponent();
            NavigationPage.SetHasNavigationBar(this, false);
            hourlyWage = 5;
        }

        private async void Back_Clicked(object sender, EventArgs e)
        {
            await Application.Current.MainPage.Navigation.PushAsync(new MenuPage());
        }

      

        private void Von_TextChanged(object sender, TextChangedEventArgs e)
        {
            try
            {
                Von_Time = Int32.Parse(e.NewTextValue);
            }
            catch (FormatException)
            {
               
            }
        }

        private void Bis_TextChanged(object sender, TextChangedEventArgs e)
        {
            try
            {
                Bis_Time = Int32.Parse(e.NewTextValue);
            }
            catch (FormatException)
            {

            }
        }
        private void Berechnen_Clicked(object sender, EventArgs e)
        {
            decimal dailywage = (Bis_Time - Von_Time) * hourlyWage;
            DailyWage.Text = dailywage.ToString("0.00");
        }
    }
}