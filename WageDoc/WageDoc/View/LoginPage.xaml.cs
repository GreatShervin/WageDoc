using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WageDoc.ViewModel;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace WageDoc.View
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class LoginPage : ContentPage
    {
        public static Action BackPressed;

        public Button Accept;
        public Button deinied;

        
        public LoginPage()
        {
            InitializeComponent();
            this.BindingContext = this;
            this.IsBusy = false;
            Accept = new Button();
            deinied = new Button();
        }

        private async void Login_Clicked(object sender, EventArgs e)
        {




                await Application.Current.MainPage.Navigation.PushAsync(new MenuPage());
                
       }



            

        

        async Task DandoUmTempo(int z)
        {
            await Task.Delay(z);
        }

        private async void Register_Clicked(object sender, EventArgs e)
        {
            await Application.Current.MainPage.Navigation.PushAsync(new RegistrationPage());
        }

        private void Exit_Clicked(object sender, EventArgs e)
        {
            System.Diagnostics.Process.GetCurrentProcess().CloseMainWindow();

        }
    }
}