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
    public partial class RegistrationPage : ContentPage
    {
        public RegistrationPage()
        {
            InitializeComponent();

            this.BindingContext = this;
            this.IsBusy = false;


        }

        private async void Register_Clicked(object sender, EventArgs e)
        {


            await Application.Current.MainPage.Navigation.PushAsync(new MenuPage());
        }

        async Task UndoDonTempo(int z)
        {
            await Task.Delay(z);
        }

        private async void BackToLogin_Clicked(object sender, EventArgs e)
        {
            await Application.Current.MainPage.Navigation.PushAsync(new LoginPage());
        }
    }
}