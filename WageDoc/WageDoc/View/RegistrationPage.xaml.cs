using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace WageDoc.View
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class RegistrationPage : ContentPage
    {
        private static readonly HttpClient client = new HttpClient();
        public RegistrationPage()
        {
            InitializeComponent();

            this.BindingContext = this;
            this.IsBusy = false;


        }

        private async void Register_Clicked(object sender, EventArgs e)
        {
            await Application.Current.MainPage.Navigation.PushAsync(new MenuPage());

            var values = "{\"first_name\" : \""+ Vorname.Text + "\",    \"second_name\" : \""+Nachname.Text+"\",    \"birthday\" : \""+ Geburtsdatum.Date + "\",    \"email\" : \""+Email.Text+"\",    \"password\" : \""+Password.Text+"\"} ";

            var content = new StringContent(values, Encoding.UTF8, "application/json");

            var response = await client.PostAsync("http://localhost:3000/api/auth/register", content);

            var responseString = await response.Content.ReadAsStringAsync();

            Console.WriteLine(responseString);
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