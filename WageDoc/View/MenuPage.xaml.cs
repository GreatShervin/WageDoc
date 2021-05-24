using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WageDoc.Model;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace WageDoc.View
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class MenuPage : TabbedPage
    {
        public MenuPage()
        {
            InitializeComponent();
            NavigationPage.SetHasNavigationBar(this, false);
            var mainpage = this.Children[1];
            this.CurrentPage = mainpage;
        }

        private  void TagesAnsicht_Button(object sender, EventArgs e)
        {
            
        }

        private async void Calendar_DateClicked(object sender, XamForms.Controls.DateTimeEventArgs e)
        {
            await Application.Current.MainPage.Navigation.PushAsync(new Tagesansicht());
        }

        private async void ProfilButton_Clicked(object sender, EventArgs e)
        {
            await Application.Current.MainPage.Navigation.PushAsync(new ProfilePage());
                }
    }
}